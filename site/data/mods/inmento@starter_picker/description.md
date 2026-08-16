# Starter Picker

Starter Picker lets players configure the Pokémon in each original starter-ball position while preserving the game’s intended rival counter-pick relationship. It supports all 151 Gen 1 species and all 251 Gold species.

## Features

Gen 1 supports Oak’s Lab, player-only maximum DVs, and a dedicated in-game 151-species browser under **START > OPTIONS**. Gold supports Elm’s Lab, dynamic configured-species dialogue and presentation, player-only Preserve, Max, Random, and legal Shiny DV modes, plus named or weighted starter held-item choices.

The mod also recognizes supported Gen 1 and Gold Randomizer configurations so the player’s named ball selection remains authoritative. Rival DVs and held items are not changed by player-only settings.

## Install

Download the newest `starter_picker-<version>.zip` from the [release page](https://github.com/inmento/Starter-Picker/releases). In Gen 1 Recomp, open **MODS**, choose **Import mod .zip**, import the archive, and enable the mod.

## Compatibility

Starter Picker targets API 2 and supports Gen 1 and Gold. It uses the engine’s active game version to select the appropriate Oak’s Lab or Elm’s Lab branch before registering generation-specific behavior. It declares the `engine_internals` permission for its compatible UI and starter-flow integrations.
