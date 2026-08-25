# FireRed Broad Overworld Importer

This **experimental, Red-only, player-local** importer projects selected FireRed English v1.0 overworld visuals into Pokémon Red while retaining the game’s native map and gameplay data. It does not package a ROM, extracted FireRed images, generated cache, or source-derived artwork.

Version `0.1.0-rc.2` is a manifest-only test release supporting Gen1Recomp `>=0.2.18 <1.0.0`. The visual projection, source-ROM requirement, and runtime behavior are unchanged from the prior release.

It is independent of the other FireRed importers, but it must not be combined with **FireRed Kanto Visual Importer** or **FireRed Foliage Importer**, which are declared conflicts. It does not change collision, warps, maps, encounters, scripts, saves, or progression.
