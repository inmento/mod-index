# Randomized Gym Challenge

**Randomized Gym Challenge** is an experimental new game mode for Pokémon Red, Blue, Yellow, and Gold. Rather than only moving existing leader parties, it can build a saved gym challenge around each physical gym’s intended team size and level curve.

All gameplay-changing options begin **off**. Players can independently enable randomized leaders, team composition, limited level variation, physical-gym type themes, evolution-stage matching, legal movesets, and Gold held items. A generated plan is stored per save so a team cannot change unexpectedly after save/load. The **Rebuild Challenge (Test)** option is provided for intentional WIP rerolls.

Each building keeps its original badge, reward, and progression flow. With leader randomization enabled, the visiting leader supplies the battle presentation while the physical gym still owns completion rewards. Gen 1 gym trainers and statue labels follow the visiting leader as well. Gold held-item generation excludes key items, HMs, non-tossable items, and no-effect held items.

Version `1.1.9` replaces the unreliable standalone Gen 1 Oak offer with a two-stage opt-in. In Red, Blue, and Yellow, a Yes/No text box appears immediately after player naming; choosing Yes only records the decision and leaves the entire native opening unchanged. After the player chooses a starter, defeats the Oak’s Lab rival, returns Oak’s Parcel, receives the Pokédex, and the rival departs, the final native cutscene command automatically displays the Gym Challenge explanation and start summary, then safely updates the already received starter, restores HP only, and routes to the first physical gym. Choosing No leaves normal progression unchanged. Crystal 251 does not control this flow; its optional integration only provides merged roster data. In Gold, the established offer still appears after the player receives a starter, returns with the Mystery Egg, and hands it to Elm.

During an active Gym Challenge, each physical gym offers one extra weighted encouragement reward. The native non-battling Gym Guide speaks first, then provides a curated non-junk item; the reward is saved per gym and cannot be claimed twice. Gold uses the same guide flow when a live guide exists and otherwise grants the same one-time leader parting gift after the native reward and before routing to the next gym. Routing records its queued, completed, or paused state; a failed or invalid warp preserves the pending destination and exposes a readable diagnostic through Progress History and Next Gym Hint. The confirmation-gated **Abandon Gym Challenge** action clears only this mod’s active challenge state and generated plan, leaving native badges, story, party, and inventory untouched.

> Use a separate save for first-time Gym Challenge testing. The feature passed static and scripted regression checks but has not received a full live playthrough in Red, Blue, Yellow, or Gold.

Do not enable this alongside **Gym Leader Shuffle**. Both mods alter gym-leader battle behavior, and the package declares a conflict to prevent the combination.

The source and release ZIP contain no ROM content, extracted game data, or game assets.
