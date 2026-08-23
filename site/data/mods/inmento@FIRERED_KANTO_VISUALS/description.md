# FireRed Kanto Visual Importer

**FireRed Kanto Visual Importer** is a visual-only Gen1Recomp overhaul for Red, Blue, and Yellow. It reads existing-Pokédex Pokémon front/back battle art and mapped Kanto trainer battle portraits from a player-provided, launcher-verified English **Pokémon FireRed v1.0** ROM. It applies those visuals to the existing Kanto game without distributing any FireRed ROM data or extracted assets.

> Version **0.1.5** keeps normal Gen 1 terrain geometry active by default. This preserves collision, doors, warps, ledges, grass, map connections, scripts, saves, and progression while the FireRed battle-visual import remains enabled.

## Version 0.1.5 — Collision-aligned terrain default

The earlier terrain prototype expanded FireRed 16×16 metatiles into Gen1Recomp’s 32×32 map-block geometry and paired them with Gen 1 map blocks by numeric ID. The two games do not assign the same meaning to those IDs. A Pallet Town house could consequently draw as an unrelated FireRed Pokémon Center or door while the real Gen 1 collision/warp cell remained elsewhere, leaving the player unable to exit by walking to the displayed doorway.

Version 0.1.5 removes that unsafe numeric terrain replacement from the default path. FireRed Pokémon and trainer battle art still import normally, while the base terrain stays visible and aligned with the real Gen 1 map behavior. The previous terrain prototype is retained solely as the optional **FR TERRAIN PREVIEW** toggle for diagnostic screenshots; turn it on only after acknowledging that its visible doors, paths, ledges, water, and buildings are not reliable navigation markers, then restart the game.

The release also retains v0.1.4’s true-colour outdoor-transition correction, which prevents the earlier white/fragmented screen when leaving an interior.

## Required source ROM

The launcher verifies the source file before the importer reads it. Only the following ROM revision is supported:

| Revision | MD5 |
|---|---|
| FireRed English v1.0 | `e26ee0d44e809351c8ce2d73c7400cdd` |

The public release package contains no FireRed ROM, extracted graphics, or generated FireRed-derived files. Select your own supported ROM through Gen1Recomp’s standard **Imported Files** flow.

## Scope

This importer does **not** import or replace FireRed maps, collision, warps, NPCs, scripts, encounters, items, story progression, saves, or game mechanics. A future FireRed-style terrain layer requires purpose-built semantic profiles that map FireRed art to the meaning of specific Gen 1 terrain blocks and map categories; it cannot be created safely by resizing tiles or pairing metatiles by numeric ID.

[View the source repository](https://github.com/inmento/FireRed-Kanto-Visual-Importer) or [download the latest release](https://github.com/inmento/FireRed-Kanto-Visual-Importer/releases/latest).
