# FireRed Kanto Visual Importer

**FireRed Kanto Visual Importer** is a visual-only Gen1Recomp overhaul for Red, Blue, and Yellow. It reads selected terrain graphics, existing-Pokédex Pokémon front/back battle art, and mapped Kanto trainer battle portraits from a player-provided, launcher-verified English **Pokémon FireRed v1.0** ROM. It applies those visuals to the existing Kanto game without distributing any FireRed ROM data or extracted assets.

> This importer preserves the base game’s maps, collision, ledges, warps, NPCs, scripts, encounters, items, story progression, saves, and mechanics. It is a FireRed-style visual layer, **not** a FireRed map or gameplay conversion.

## Version 0.1.3

Version 0.1.3 restores the original uppercase package ID, `FIRERED_KANTO_VISUALS`, used by the 0.1.0 and 0.1.1 importer installations. Because Gen1Recomp identifies an installed mod by that manifest ID, those installations can update normally through this index again. The release also retains the terrain-atlas bounds correction: FireRed 4×4 metatiles are placed correctly on the generated 64-tile-wide atlas grid instead of writing beyond the image during startup. No gameplay or visual-import scope changed beyond the package-identity and bounds corrections.

> Installations from 0.1.0 or 0.1.1 can update directly. If you manually installed the temporary lowercase 0.1.2 ZIP, remove it and install `FIRERED_KANTO_VISUALS-0.1.3.zip` once.

## Required source ROM

The launcher verifies the source file before the importer reads it. Only the following ROM revision is supported:

| Revision | MD5 |
|---|---|
| FireRed English v1.0 | `e26ee0d44e809351c8ce2d73c7400cdd` |

The public release package contains no FireRed ROM, extracted graphics, or generated FireRed-derived files. Select your own supported ROM through Gen1Recomp’s standard **Imported Files** flow.

## Current test scope

The initial profile imports the FireRed General terrain tileset, normal-colour art for the existing 151 Pokémon, and mapped Kanto trainer battle portraits. It is deliberately a pipeline prototype: expected visual mismatches are useful test feedback while a later semantic terrain mapping is developed.

[View the source repository](https://github.com/inmento/FireRed-Kanto-Visual-Importer) or [download the latest release](https://github.com/inmento/FireRed-Kanto-Visual-Importer/releases/latest).
