# FireRed Tilesheet Importer Prototype

This is an **experimental, Red-only, player-local** exploration of Gen1Recomp’s native tileset-sheet contract. It reads a player-supplied **Pokémon FireRed (English) v1.0** file locally at runtime, builds an in-memory image sheet, and patches only the image metadata for an already-existing Red tilesheet. It does **not** package a ROM, extracted graphics, converted PNGs, source-derived sheets, game data, or artwork.

> This is a separate prototype from **FireRed Kanto Visual Importer** (`FIRERED_KANTO_VISUALS`). Do not install both: they are declared as conflicts because they target the same visual-import surface through different implementations.

## Current visual scope

The active mappings are deliberately narrow and evidence-backed. FireRed Pallet Town secondary metatile `38`, top-left 8×8 cell writes only to Red `OVERWORLD` tile `82`, the approved grass reuse slot. FireRed Player’s House 1F Building primary metatile `1`, top-left 8×8 cell writes only to Red’s repeated neutral-floor tile `1` in `REDS_HOUSE_1` and `REDS_HOUSE_2`. It does not perform a whole-map, broad-building, tree, water, door, stair, furniture, ledge, or animation conversion.

| Contract boundary | Prototype behavior |
|---|---|
| Target grid | Preserves Red’s native 8×8 `OVERWORLD` sheet grid and target coordinates. |
| Blocks and maps | Leaves existing 4×4 block rows, map layouts, collision, encounters, warps, scripts, saves, and progression untouched. |
| Source format | Resolves FireRed’s 4bpp graphics, palette, entry flips, and transparent upper layer into one 8×8 destination cell. |
| Guardrail | Rejects a mapping before decoding unless its target slot is approved, evidence-backed, role-matched, complete, in bounds, and unique. |

## Requirements and use

Install this mod on **Gen1Recomp 0.2.18 or newer** for **Pokémon Red**. In the launcher’s standard Imported Files flow, select your own supported FireRed English v1.0 source file when the mod requests it. The importer accepts only the expected 16 MiB revision and MD5 `e26ee0d44e809351c8ce2d73c7400cdd`.

The release ZIP installs to `FIRERED_TILESET_SHEET_PROTOTYPE`. It runs independently and has no required mod dependencies. It conflicts with the separate older FireRed visual-import efforts named in its manifest to avoid both systems trying to alter the same visual surface.

## Why the scope is small

Gen1Recomp target sheets are fixed grids of 8×8 cells, while FireRed source graphics and map semantics follow a different architecture. A visually similar FireRed cell cannot safely be assigned just because it is nearby or resembles a Gen 1 tile: a target slot can be reused in multiple block contexts and may carry door, animation, water, collision-adjacent, or other gameplay-sensitive meaning. Future additions require an explicit target-reuse audit plus a verified FireRed source context for every target slot.

See the [source repository](https://github.com/inmento/FireRed-Tilesheet-Importer) and the [0.1.0-prototype.4 release](https://github.com/inmento/FireRed-Tilesheet-Importer/releases/tag/v0.1.0-prototype.4).
