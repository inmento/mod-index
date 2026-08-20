# FireRed Kanto Visual Importer

**FireRed Kanto Visual Importer** is a visual-only Gen1Recomp overhaul for Red, Blue, and Yellow. It reads selected terrain graphics, existing-Pokédex Pokémon front/back battle art, and mapped Kanto trainer battle portraits from a player-provided, launcher-verified English **Pokémon FireRed v1.0** ROM. It applies those visuals to the existing Kanto game without distributing any FireRed ROM data or extracted assets.

> This importer preserves the base game’s maps, collision, ledges, warps, NPCs, scripts, encounters, items, story progression, saves, and mechanics. It is a FireRed-style visual layer, **not** a FireRed map or gameplay conversion.

## Version 0.1.4

Version 0.1.4 fixes the white, fragmented outdoor screen that could appear when leaving an interior. The imported FireRed terrain atlas is true-colour, but it had retained the vanilla `OVERWORLD` renderer identity, causing Gen1Recomp to apply its vanilla per-tile GBC palette bake to incompatible FireRed tile IDs. The importer now gives the generated atlas a separate renderer-only identity, so the engine renders the FireRed art as true-colour while every native map remains `OVERWORLD` for collision, warps, outdoor behavior, events, encounters, and saves.

The original uppercase package ID, `FIRERED_KANTO_VISUALS`, remains unchanged, so 0.1.0 and 0.1.1 installations can update normally through this index. If you manually installed the temporary lowercase 0.1.2 ZIP, remove it and install `FIRERED_KANTO_VISUALS-0.1.4.zip` once.

## Required source ROM

The launcher verifies the source file before the importer reads it. Only the following ROM revision is supported:

| Revision | MD5 |
|---|---|
| FireRed English v1.0 | `e26ee0d44e809351c8ce2d73c7400cdd` |

The public release package contains no FireRed ROM, extracted graphics, or generated FireRed-derived files. Select your own supported ROM through Gen1Recomp’s standard **Imported Files** flow.

## Current test scope

The initial profile imports the FireRed General terrain tileset, normal-colour art for the existing 151 Pokémon, and mapped Kanto trainer battle portraits. It is deliberately a pipeline prototype: expected visual mismatches are useful test feedback while a later semantic terrain mapping is developed.

[View the source repository](https://github.com/inmento/FireRed-Kanto-Visual-Importer) or [download the latest release](https://github.com/inmento/FireRed-Kanto-Visual-Importer/releases/latest).
