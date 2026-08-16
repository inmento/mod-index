#!/usr/bin/env node
// Fold mods/ into the single file the site (and anything else) reads:
// site/data/index.json, plus copies of each entry's description.md and
// thumbnail so the published Pages site is self-contained.
//
//   node scripts/build-index.mjs                # metadata only
//   node scripts/build-index.mjs --releases     # also re-read GitHub Releases
//   GITHUB_TOKEN=... node scripts/build-index.mjs --releases   # 5000 req/h
//
// --releases is what keeps the index honest without a PR per version bump:
// entries with "github" and automatic_version_check get their highest eligible
// semantic-version release recorded. Their release asset is also emitted as the
// current direct download URL, so a first install and a later update resolve to
// the same verified ZIP even if a client refreshes only part of the feed.

import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { checkModFolder, listModFolders, loadSchema } from './lib/index-rules.mjs';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const modsDir = join(repoRoot, 'mods');
const outDir = join(repoRoot, 'site', 'data');
const withReleases = process.argv.includes('--releases');
const token = process.env.GITHUB_TOKEN || '';

const schema = loadSchema(repoRoot);
const folders = listModFolders(modsDir);

// The submission page validates against the same schema with the same checker
// CI uses. Copying beats a second implementation drifting out of step.
mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoRoot, 'schema', 'mod.schema.json'), join(outDir, 'mod.schema.json'));
copyFileSync(join(repoRoot, 'scripts', 'lib', 'jsonschema.mjs'), join(repoRoot, 'site', 'assets', 'jsonschema.js'));

rmSync(join(outDir, 'mods'), { recursive: true, force: true });
mkdirSync(join(outDir, 'mods'), { recursive: true });

const mods = [];
for (const folder of folders) {
  const dir = join(modsDir, folder);
  const { meta, errors } = checkModFolder(dir, folder, schema);
  if (!meta || errors.length) {
    console.error(`skipping ${folder}: ${errors[0] ?? 'unreadable meta.json'}`);
    continue;
  }

  const destDir = join(outDir, 'mods', folder);
  mkdirSync(destDir, { recursive: true });
  copyFileSync(join(dir, 'description.md'), join(destDir, 'description.md'));

  let thumbnail = null;
  for (const name of ['thumbnail.png', 'thumbnail.jpg']) {
    if (existsSync(join(dir, name))) {
      copyFileSync(join(dir, name), join(destDir, name));
      thumbnail = `data/mods/${folder}/${name}`;
      break;
    }
  }

  const description = readFileSync(join(dir, 'description.md'), 'utf8');
  mods.push({
    folder,
    ...meta,
    thumbnail,
    description_url: `data/mods/${folder}/description.md`,
    summary: meta.summary || firstLine(description),
    latest: null,
    update_check: meta.github && meta.automatic_version_check !== false ? 'pending' : 'off',
  });
}

if (withReleases) {
  for (const mod of mods) {
    if (mod.update_check !== 'pending') continue;
    try {
      mod.latest = await latestRelease(mod);
      mod.update_check = mod.latest ? 'ok' : 'no installable release';
      // Keep an initial index install on the same current asset as an update.
      // The launcher still prefers `latest.zip` while its release check is OK.
      if (mod.latest?.zip?.url) mod.downloadURL = mod.latest.zip.url;
    } catch (err) {
      mod.update_check = `error: ${err.message}`;
      console.error(`${mod.folder}: ${err.message}`);
    }
  }
}

mods.sort((a, b) => a.title.localeCompare(b.title));

const index = {
  // Bump when the shape changes in a way a consumer has to notice.
  schema_version: 1,
  generated_at: new Date().toISOString(),
  count: mods.length,
  categories: schema.properties.categories.items.enum,
  mods,
};

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'index.json'), `${JSON.stringify(index, null, 2)}\n`);
console.log(`wrote site/data/index.json — ${mods.length} mod(s)${withReleases ? ', releases refreshed' : ''}`);

// ---------------------------------------------------------------- helpers

function firstLine(markdown) {
  for (const raw of markdown.split('\n')) {
    const line = raw.trim();
    if (!line || line.startsWith('#') || line.startsWith('!') || line.startsWith('>')) continue;
    return line.replace(/[*_`[\]]/g, '').slice(0, 200);
  }
  return '';
}

async function ghJson(url) {
  const res = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'gen1recomp-mod-index',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  if (res.status === 404) return null;
  if (res.status === 403 && res.headers.get('x-ratelimit-remaining') === '0') {
    throw new Error('GitHub rate limit reached (set GITHUB_TOKEN)');
  }
  if (!res.ok) throw new Error(`GitHub ${res.status} for ${url}`);
  return res.json();
}

// Mirrors src/mods/ModUpdate.lua: prefer <id>-<version>.zip, then a zip whose
// name starts with the id, then the first zip in the release.
function pickZipAsset(assets, modId, version) {
  if (!Array.isArray(assets)) return null;
  const prefer = modId && version ? `${modId}-${version}.zip` : null;
  let idPrefixZip = null;
  let anyZip = null;
  for (const asset of assets) {
    const name = asset?.name;
    if (typeof name !== 'string' || !name.toLowerCase().endsWith('.zip')) continue;
    const row = { name, url: asset.browser_download_url, size: asset.size };
    if (prefer && name === prefer) return row;
    if (modId && !idPrefixZip && name.toLowerCase().startsWith(modId.toLowerCase())) idPrefixZip = row;
    if (!anyZip) anyZip = row;
  }
  return idPrefixZip || anyZip;
}

function parseRelease(doc, modId) {
  const version = String(doc.tag_name ?? '').replace(/^[vV]/, '');
  // Preserve a complete semantic version, including a pre-release suffix.  A
  // WIP tag such as 0.1.0-alpha.2 must not be collapsed to 0.1.0 or the feed
  // cannot distinguish successive pre-release builds.
  if (!/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/.test(version)) {
    return null;
  }
  const zip = pickZipAsset(doc.assets, modId, version);
  if (!zip) return null;
  return {
    version,
    tag: doc.tag_name,
    name: doc.name || version,
    prerelease: doc.prerelease === true,
    published_at: doc.published_at,
    zip,
  };
}

function compareVersionDescending(a, b) {
  const parse = (value) => {
    const match = String(value || '').match(/^(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z.-]+))?(?:\+[0-9A-Za-z.-]+)?$/);
    if (!match) return null;
    return { core: [Number(match[1]), Number(match[2]), Number(match[3])], pre: match[4] ? match[4].split('.') : null };
  };
  const left = parse(a), right = parse(b);
  if (!left || !right) return String(b).localeCompare(String(a));
  for (let i = 0; i < left.core.length; i += 1) {
    if (left.core[i] !== right.core[i]) return right.core[i] - left.core[i];
  }
  if (!left.pre && right.pre) return -1;
  if (left.pre && !right.pre) return 1;
  if (!left.pre && !right.pre) return 0;
  const count = Math.max(left.pre.length, right.pre.length);
  for (let i = 0; i < count; i += 1) {
    const one = left.pre[i], two = right.pre[i];
    if (one === undefined) return -1;
    if (two === undefined) return 1;
    if (one === two) continue;
    const oneNumber = /^\d+$/.test(one), twoNumber = /^\d+$/.test(two);
    if (oneNumber && twoNumber) return Number(two) - Number(one);
    if (oneNumber) return -1;
    if (twoNumber) return 1;
    return two.localeCompare(one);
  }
  return 0;
}

function newestRelease(rows) {
  return rows.sort((a, b) => {
    const byVersion = compareVersionDescending(a.version, b.version);
    if (byVersion !== 0) return byVersion;
    return String(b.published_at || '').localeCompare(String(a.published_at || ''));
  })[0] || null;
}

async function latestRelease(mod) {
  const releases = await ghJson(`https://api.github.com/repos/${mod.github}/releases?per_page=100`);
  if (!Array.isArray(releases) || releases.length === 0) return null;

  if (mod.fixed_release_tag) {
    const pinned = releases.find((r) => r.tag_name === mod.fixed_release_tag);
    return pinned ? parseRelease(pinned, mod.id) : null;
  }
  const parsed = releases.map((r) => parseRelease(r, mod.id)).filter(Boolean);
  const stable = parsed.filter((r) => !r.prerelease);
  return newestRelease(stable.length > 0 ? stable : parsed);
}
