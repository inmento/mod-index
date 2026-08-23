# FireRed Kanto Visual Importer

**FireRed Kanto Visual Importer** is a Gen1Recomp visual-import overhaul for Red, Blue, and Yellow. It reads Pokémon battle art, trainer battle portraits, and bounded map/tileset data from a player-provided, launcher-verified English **Pokémon FireRed v1.0** ROM. The public release contains no FireRed ROM, extracted artwork, map data, or ROM-derived cache.

> Version **0.2.4** retains the **map-aware semantic visual pipeline** and isolates each generated profile atlas from renderer cache reuse. It supports **Pallet Town** and **Red’s House 1F** while retaining the exact existing Gen 1 map grid and all gameplay semantics.

## Version 0.2.4 — Generated-atlas cache isolation

After the first-floor exit was repaired, a runtime recording showed Pallet Town retaining outdoor NPC and script behavior while displaying FireRed Player’s House interior pixels. The distinct Pallet and Player’s House profiles now resolve through pipeline-revision-specific generated atlas paths, and the private asset bridge refreshes its backing cache if the importer is replaced while the renderer remains resident.

This correction is visual-only. It does not alter the four-cell semantic lock, map dimensions, collision, door/warp behavior, exits, objects, scripts, events, saves, or progression.

## Version 0.2.3 — Four-cell collision and warp tile lock

A Gen1Recomp 4×4 map block contains four independent 16×16 movement cells. The earlier semantic converter preserved only the lower-left cell’s collision tile, so a downstairs door or stair in another cell could inherit a different cell’s behavior and trap the player on Red’s House 1F.

Version 0.2.3 independently locks and remaps the original Gen 1 semantic tile for all four movement cells—tile positions 5, 7, 13, and 15—on every generated map block and generated border block. FireRed supplies visual pixels only; the original Gen 1 walkable, door, warp, grass, water, shore, counter, and blocked behavior remains at each existing coordinate.

## Version 0.2.2 — Dedicated FireRed layout-border rendering

The initial v0.2.1 profile evidence confirmed correct tile scale and active profile application, but revealed that a compact Gen 1 interior could repeat a FireRed room sample across the camera outside its actual map blocks. The old generated border used the source room’s top-left map cells instead of FireRed’s own layout border.

Version 0.2.2 reads each supported profile’s bounded FireRed `MapLayout` border pointer and verified 2×2 border dimensions. Its generated border uses those dedicated FireRed border entries while retaining the original Gen 1 border collision tile. The correction cannot move or alter map dimensions, exits, stairs, collision, warps, objects, scripts, events, saves, or progression.

## Version 0.2.1 — Variable-size compressed-tileset repair

Version 0.2.0 could silently leave both supported map profiles on native Gen 1 art after a valid FireRed v1.0 import because it incorrectly required every compressed FireRed secondary tileset to contain exactly 384 8×8 tiles. FireRed’s Pallet Town and Generic Building 1 sheets are valid smaller 4bpp sheets; their actual size is declared by their GBA LZ77 stream.

Version 0.2.1 reads the exact LZ77-declared tile count for compressed sheets, while preserving bounded input, integral 8×8 tiles, source-metatile validation, fixed 4×4 Gen 1 block rows, and the semantic collision tile lock. If **FR MAP VISUALS** is enabled but every requested profile is rejected, the importer now fails visibly in the Mod Manager with its first converter diagnostic rather than silently leaving all terrain native.

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

[View the source repository](https://github.com/inmento/FireRed-Kanto-Visual-Importer) or [download the latest release](https://github.com/inmento/FireRed-Kanto-Visual-Importer/releases/tag/v0.2.4).
