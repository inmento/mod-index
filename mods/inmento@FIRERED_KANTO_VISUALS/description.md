# FireRed Kanto Visual Importer

**FireRed Kanto Visual Importer** is a Gen1Recomp visual-import overhaul for Red, Blue, and Yellow. It reads Pokémon battle art, trainer battle portraits, and bounded map/tileset data from a player-provided, launcher-verified English **Pokémon FireRed v1.0** ROM. The public release contains no FireRed ROM, extracted artwork, map data, or ROM-derived cache.

> Version **0.2.0** is the first **map-aware semantic visual pipeline** test build. It supports **Pallet Town** and **Red’s House 1F** while retaining the exact existing Gen 1 map grid and all gameplay semantics.

## Version 0.2.0 — Map-aware visual profiles

The previous numeric terrain experiment paired Gen 1 map blocks with same-numbered FireRed metatiles. Those IDs have different meanings in each game, so Red’s House could display as an unrelated FireRed Pokémon Center while its real Gen 1 exit warp remained elsewhere.

Version 0.2.0 replaces that approach with a three-layer internal pipeline: a verified-ROM reader, deterministic semantic tile converter with fixed 8×8 target cells, and per-map profile applicator. Each supported Gen 1 map block receives its own FireRed-derived visual row while retaining the original block’s collision class—walkable, grass, water, shore, door, warp, counter, or blocked. The profile cannot create, move, or hide Gen 1 gameplay coordinates.

| Supported map profile | Visual reference | Preserved Gen 1 behavior |
|---|---|---|
| **Pallet Town** | FireRed Pallet Town tiles/layout | Red’s House, Blue’s House, Oak’s Lab, paths, grass, collision, doors, and warps remain at Gen 1 positions. |
| **Red’s House 1F** | FireRed Player’s House 1F tiles/layout | The downstairs exit and upstairs warp remain at Gen 1 positions. |
| Other maps | Native Gen 1 art until their own profile is validated | No terrain/collision mismatch is introduced. |

The former **FR TERRAIN PREVIEW** numeric-substitution setting is removed. **FR MAP VISUALS** is enabled by default and applies only profiles that pass layout, tileset, crop-bound, block-size, and semantic tile-lock checks. A failed profile falls back to its native Gen 1 map rather than showing mismatched terrain.

## Required source ROM

The launcher validates the source file before the importer reads it. Only this revision is supported:

| Revision | MD5 |
|---|---|
| FireRed English v1.0 | `e26ee0d44e809351c8ce2d73c7400cdd` |

Select your own supported ROM through Gen1Recomp’s standard **Imported Files** flow. The source stays local to the player.

## Focused test request

After updating, restart the game and test the visible downstairs door in Red’s House 1F, then Red’s House, Blue’s House, and Oak’s Lab entrances in Pallet Town. Please include the named map and a screenshot or short clip if a profile needs coordinate tuning.

[View the source repository](https://github.com/inmento/FireRed-Kanto-Visual-Importer) or [download the latest release](https://github.com/inmento/FireRed-Kanto-Visual-Importer/releases/tag/v0.2.0).
