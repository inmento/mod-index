# FireRed Foliage Importer

This **experimental, Red-only, player-local** importer reads a player-supplied FireRed English v1.0 source at runtime to provide its audited foliage presentation for existing Red tree and encounter-grass uses. It does not package a ROM, extracted FireRed images, generated visual cache, or source-derived artwork.

Version `0.1.0-rc.2` is a manifest-only test release supporting Gen1Recomp `>=0.2.18 <1.0.0`. The source-ROM requirement and visual logic are unchanged from the prior release.

The importer is independent, but it must not be combined with **FireRed Kanto Visual Importer**, which is a declared conflict. It leaves map records, collision, warps, encounters, scripts, saves, and progression unchanged.
