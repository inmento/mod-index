# Texture Pack Templates

This release provides **six empty, edition-specific texture-pack templates** for **Red, Blue, Yellow, Gold, Silver, and Crystal**. Each template is an ordinary Gen1Recomp mod whose `overrides/` directory can replace matching generated **visual** paths without changing game data, collision, warps, or map logic. Version `0.2.0` covers ordinary generated-image resolution plus direct LÖVE image, image-data, and video loader calls used by presentation paths such as title and intro animation.

Choose the ZIP that matches the game you are targeting. Copy the template, assign your own manifest `id` and name, then add only your own or properly licensed compatible visual files below `overrides/`. If the game uses `assets/generated/tilesets/cavern.png`, your pack replaces it with `overrides/tilesets/cavern.png`. Any path you do not provide safely falls back to the player’s imported game asset.

| Template | Target game |
|---|---|
| `red-texture-pack-template-0.2.0.zip` | Red — Gen1Recomp `>=0.2.18` |
| `blue-texture-pack-template-0.2.0.zip` | Blue — Gen1Recomp `>=0.2.18` |
| `yellow-texture-pack-template-0.2.0.zip` | Yellow — Gen1Recomp `>=0.2.18` |
| `gold-texture-pack-template-0.2.0.zip` | Gold — Gen1Recomp `>=0.2.18` |
| `silver-texture-pack-template-0.2.0.zip` | Silver — Gen1Recomp `>=0.2.18` |
| `crystal-texture-pack-template-0.2.0.zip` | Crystal — Gen1Recomp `>=0.2.24` |

The Crystal template includes a path-reference document for battle art, tilesets, sprites, title, intro, fonts, menu, Pack, Pokédex, Pokégear, and other generated image families. It does not include those assets.

> **Do not package ROM files, extracted game assets, cache folders, game Lua/data, or derived recolors.** Texture packs may include artwork their creator made or is licensed to distribute. A recolor or edit derived from a player’s imported game art must use the engine’s asset-transform route rather than shipping the pixels.

The repository and its release assets are public. The templates remain asset-free.
