# Red Centered Layout

Red Centered Layout is a **Pokémon Red-only** Gen1Recomp Mod API 2 presentation mod. It corrects two legacy visual offsets while leaving gameplay and save data alone.

| Visual change | Result |
|---|---|
| **Red Version title caption** | The original two-part caption is centered on the 160-pixel title canvas instead of sitting 8 pixels to the right. |
| **Overworld player framing** | The normal 16×16 player sprite is centered in the active world viewport instead of inheriting the original Game Boy offset. |

## What it does not change

The mod does not change maps, player coordinates, collision, movement, encounters, scripts, sprites, audio, saves, or link behavior. Blue, Yellow, Gold, and Silver are not patched.

A custom continuous title ribbon supplied by a translation, rebrand, or total conversion remains under that mod’s control. If the runtime cannot create the temporary centered ribbon, Red Centered Layout safely keeps the native title art instead.

## Install

Download the latest ZIP from the [release page](https://github.com/inmento/Red-Centered-Layout/releases). In Gen1Recomp, open **MODS**, choose **Import mod .zip**, select the archive, and enable it for Pokémon Red. The mod requires Gen1Recomp **0.2.19 or later**.

## Compatibility

Red Centered Layout does not require another mod. It uses the shared Red camera and title-state internals, so test it with any other mod that independently changes the same camera-follow or title-rendering methods.
