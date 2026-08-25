# FireRed Battle Sprite Importer

This **experimental, Red-only, player-local** importer reads a player-supplied FireRed English v1.0 source at runtime to provide FireRed-derived visual presentation for battle Pokémon and trainers, the title presentation, Oak presentation, compatible starter portraits, Pokédex/status portraits, and Red player art. It does not package a ROM, extracted FireRed graphics, decoded sheets, or source-derived assets.

The importer is intentionally separate from the FireRed Kanto Visual Importer. Do **not** install both: the two mods declare a conflict because they target overlapping FireRed visual-import surfaces.

Version `0.1.0-rc.3` is a manifest-only test release that supports Gen1Recomp `>=0.2.18 <1.0.0`. Its runtime visual behavior, player-provided source requirement, and package contents are unchanged from the prior release.

The mod changes visual presentation only. It does not alter maps, collision, warps, encounters, scripts, saves, progression, or battle mechanics.
