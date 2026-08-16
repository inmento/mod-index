# Adding a mod entry

This personal index lists only Inmento-owned Gen 1 Recomp mods. Each entry is metadata only; do not place mod code, ROM content, or release ZIPs in this repository.

Create `mods/inmento@<manifest-id>/` with exactly these files:

| File | Purpose |
|---|---|
| `meta.json` | Schema-compatible listing metadata. The `id` must exactly match the mod’s `manifest.json`. |
| `description.md` | A plain-language description, installation note, and compatibility note. |

Use an existing entry as the template. Set `github` to the source repository and leave `automatic_version_check` enabled so the scheduled feed refresh can record the latest stable GitHub Release automatically.

Before committing an entry, run:

```sh
npm run validate
npm run build:releases
```

Commit the refreshed `site/data/index.json` with the new entry.
