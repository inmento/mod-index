# Red & Yellow Centered Layout

**Red & Yellow Centered Layout** is a Gen1Recomp Mod API 2 presentation mod for **Pokémon Red and Pokémon Yellow**. It corrects the standard Gen 1 overworld framing so the normal 16×16 player sprite is centered in the active viewport, without changing player coordinates, maps, collision, movement, encounters, scripts, save data, or link behavior.

| Game | Visual behavior |
|---|---|
| Pokémon Red | Centers the overworld player sprite and corrects the visible alignment of the native `Red Version` title caption. |
| Pokémon Yellow | Centers the overworld player sprite while preserving the native fixed-Pikachu title composition. |

Yellow intentionally receives **no** title-ribbon replacement. Its normal title flow uses a separate fixed-Pikachu composition and does not display a version ribbon to recenter. The Red correction preserves the original title fragments in a transient in-memory ribbon; a custom continuous `versionRibbon` from a translation, rebrand, or total conversion remains under that mod’s control.

## Install

Download the latest ZIP from the [release page](https://github.com/inmento/Red-Centered-Layout/releases). In Gen1Recomp, open **MODS**, choose **Import mod .zip**, select the archive, and enable it for Pokémon Red or Pokémon Yellow. The mod requires Gen1Recomp **0.2.19 or later**.

## Compatibility

This mod does not require another mod. It uses shared camera and title-state internals, so test it with another mod that independently changes the same camera-follow or title-rendering methods. Blue, Gold, and Silver are intentionally outside its scope.
