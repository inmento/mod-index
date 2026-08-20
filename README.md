# Inmento Gen 1 Recomp Mod Index

This is the personal release index for **Inmento’s Gen 1 Recomp mods**. It lists metadata only: mod source and installable ZIPs remain in their own repositories and releases.

The layout, entry schema, generated feed, and release selection rules are compatible with the public [Gen 1 Recomp Mod Index](https://github.com/bryanthaboi/gen1recomp-mod-index). This repository is a personal catalogue, not a replacement for Bryan’s community index.

## Current mods

| Mod | Current release | Source and downloads |
|---|---:|---|
| FireRed Kanto Visual Importer | 0.1.3 | [Release page](https://github.com/inmento/FireRed-Kanto-Visual-Importer/releases) |
| Gym Leader Shuffle | 1.0.8 | [Release page](https://github.com/inmento/Gym-Leader-Shuffle/releases) |
| Item Randomizer | 1.0.12 | [Release page](https://github.com/inmento/Item-Randomizer/releases) |
| Randomized Gym Challenge | 1.1.8 | [Release page](https://github.com/inmento/Randomized-Gym-Challenge/releases) |
| Shedinja | 0.3.4 | [Release page](https://github.com/inmento/Shedinja/releases) |
| Shedinja Compatibility Bridge | 0.1.4 | [Release page](https://github.com/inmento/Shedinja-Expanded-Bridge/releases) |
| Sound Effect Replacer | 0.3.3 | [Release page](https://github.com/inmento/Sound-Effect-Replacer/releases) |
| Starter Picker | 1.0.13 | [Release page](https://github.com/inmento/Starter-Picker/releases) |

## Machine-readable feed

The generated catalogue is available at [`site/data/index.json`](site/data/index.json). Each entry carries its source repository, supported games, API information, and the latest installable release ZIP selected from GitHub Releases.

## Automatic release tracking

Each entry declares its GitHub repository and enables `automatic_version_check`. The scheduled workflow refreshes `site/data/index.json` from the latest stable release every day. A normal mod update therefore needs only its usual versioned GitHub release; the index feed updates automatically.

## Adding another Inmento mod

Create one folder under `mods/` named `inmento@<manifest-id>`. It must contain only `meta.json` and `description.md`. Copy an existing entry, ensure that `id` exactly matches the mod’s `manifest.json`, set `github` to the source repository, and run:

```sh
npm run validate
npm run build:releases
```

The committed `site/data/index.json` is the public feed. The scheduled workflow will maintain release metadata after the entry is added.

## Compatibility

The index uses the public metadata schema and release-selection rules maintained by the [Gen 1 Recomp Mod Index](https://github.com/bryanthaboi/gen1recomp-mod-index). It intentionally contains no ROM content, mod code, or release ZIPs.

## Tooling credit

The schema-compatible entry rules and feed-builder structure are adapted from the public [Gen 1 Recomp Mod Index](https://github.com/bryanthaboi/gen1recomp-mod-index), which is the canonical community index.
