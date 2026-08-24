# Gold/Silver Case Style

Gold/Silver Case Style is a standalone Gen1Recomp Mod API 2 quality-of-life mod for **Gold and Silver**. It gives engine-authored all-caps text a cleaner title/mixed-case presentation without changing save data, gameplay data, maps, sprites, audio, or link behavior.

| Native text | Display with this mod |
|---|---|
| `PLAYER used POTION!` | `Player used Potion!` |
| `POKéMON` | `Pokémon` |
| `POKéDEX` | `Pokédex` |
| `EXP. ALL` | `Exp. All` |

## Text safety

The formatter preserves player-created and engine-control content exactly. It tracks the active save through normal save lifecycle events and leaves player/rival names, party and box nicknames, custom box names, and Day-Care names unchanged. It also preserves brace and angle-bracket placeholders, font commands, and common labels such as **HP**, **PP**, **PC**, **TM**, **HM**, **EXP**, **ID**, **TV**, **CD**, and **KO**.

## Install

Download the latest ZIP from the [release page](https://github.com/inmento/Gold-Silver-Case-Style/releases). In Gen1Recomp, open **MODS**, choose **Import mod .zip**, select the archive, and enable it for Gold or Silver. The mod requires Gen1Recomp **0.2.15 or later**.

## Compatibility

Gold/Silver Case Style does not require other mods and is designed to coexist with gameplay, encounter, sprite, audio, and save-data mods. A separate text, translation, or font mod that also replaces the shared font encoder may determine the final presentation order, so test that combination if you use one.

## Crystal runtime support

Version 0.2.0 adds native Crystal coverage through the shared Gen 2 formatter and changes the player-facing presentation to Gen 2 Case Style. Gold and Silver behavior remains unchanged; player-entered names are never recased.
