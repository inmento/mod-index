# Texture Pack Templates

This release provides **six empty, edition-specific texture-pack templates** for **Red, Blue, Yellow, Gold, Silver, and Crystal**. Each template is an ordinary Gen1Recomp mod whose `overrides/` directory can shadow matching generated image paths without changing game data, collision, warps, or map logic.

Choose the ZIP that matches the game you are targeting. Copy the template, assign your own manifest `id` and name, then add only your own or properly licensed PNG files below `overrides/`. If the game uses `assets/generated/tilesets/cavern.png`, your pack replaces it with `overrides/tilesets/cavern.png`. Any path you do not provide safely falls back to the player’s imported game asset.

| Template | Target game |
|---|---|
| `red-texture-pack-template-0.1.0.zip` | Red |
| `blue-texture-pack-template-0.1.0.zip` | Blue |
| `yellow-texture-pack-template-0.1.0.zip` | Yellow |
| `gold-texture-pack-template-0.1.0.zip` | Gold |
| `silver-texture-pack-template-0.1.0.zip` | Silver |
| `crystal-texture-pack-template-0.1.0.zip` | Crystal |

The Crystal template includes a source-derived path reference for battle art, tilesets, sprites, title, intro, fonts, menu, Pack, Pokédex, Pokégear, and other generated image families.

> **Do not package ROM files, extracted game assets, cache folders, game Lua/data, or derived recolors.** Texture packs may include artwork their creator made or is licensed to distribute. A recolor or edit derived from a player’s imported game art must use the engine’s asset-transform route rather than shipping the pixels.

The repository is currently private, so its release links are available through the owner’s authenticated GitHub account.
