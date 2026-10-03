# Gen 1 & Gen 2 Definitive Mod Suite

This private/local-testing alpha composes several requested systems into one generation-aware Mod API 2 package. A fresh save receives a deterministic trio of random starters that is stored in the save namespace and does not change mid-run. Typed Metronomes are registered as TM-style moves and are learnable only by Pokémon that share the move's type; Gen 2 adds Dark, Steel, and Curse handling.

The suite also adds a guarded EXP overlay, permanent badge stat/catch/EXP/money bonuses without reproducing the Gen 1 badge-boost glitch, deterministic level-based replacements for trade evolutions, perfect player DVs on caught Pokémon, Normal/Hard/Impossible difficulty hooks, and Gen 2 shiny odds that begin at 3% and rise by one percentage point per 10% Pokédex completion to a 13% cap. Starter gift species are projected through the public gift event; current 0.3.40 Gen 1 gift creation does not expose DV writeback yet.

This is an **alpha**, not a claim that every surface is finished on every game. It uses the current public Gen1Recomp Mod API 2 contracts and deliberately fails closed where a game does not expose a mutable field. Test fresh saves on each target game before using it in a cart.

[Source repository](https://github.com/inmento/Gen1-Gen2-Definitive-Mod-Suite) · [Release](https://github.com/inmento/Gen1-Gen2-Definitive-Mod-Suite/releases/tag/v0.1.0-alpha.1)
