# Randomized Gym Challenge — WIP

**Randomized Gym Challenge** is an experimental new game mode for Pokémon Red, Blue, Yellow, and Gold. Rather than only moving existing leader parties, it can build a saved gym challenge around each physical gym’s intended team size and level curve.

All gameplay-changing options begin **off**. Players can independently enable randomized leaders, team composition, limited level variation, physical-gym type themes, evolution-stage matching, legal movesets, and Gold held items. A generated plan is stored per save so a team cannot change unexpectedly after save/load. The **Rebuild Challenge (Test)** option is provided for intentional WIP rerolls.

Each building keeps its original badge, reward, and progression flow. With leader randomization enabled, the visiting leader supplies the battle presentation while the physical gym still owns completion rewards. Gen 1 gym trainers and statue labels now follow the visiting leader as well. Gold held-item generation excludes key items, HMs, non-tossable items, and no-effect held items.

The `1.0.3-alpha` release includes an opt-in **Gym Challenge** flow. After naming the player, a Yes/No prompt can route a new run to the native starter lab, adjust the starter level for the first gym’s type matchup, then heal and route the player after each physical gym reward. Gold preserves the native first Hall of Fame and credits sequence before starting the Kanto gym phase on the next Continue boot.

During an active Gym Challenge, each physical gym offers one extra weighted encouragement reward. The native non-battling Gym Guide speaks first, then provides a curated non-junk item; the reward is saved per gym and cannot be claimed twice. Gold uses the same guide flow when a live guide exists and otherwise grants the same one-time leader parting gift after the native reward and before routing to the next gym. Release ZIP asset names omit `alpha` for updater testing, while the release tags and embedded manifest versions retain their explicit `1.0.x-alpha` identifiers.

> This is an **explicitly untested experimental alpha build**. It is promoted from GitHub pre-release status so Gen 1 Recomp can detect updates during testing; it is not a stable release. Test it on a separate save and use the repository’s testing checklist when reporting issues.

Do not enable this alongside **Gym Leader Shuffle**. Both mods alter gym-leader battle behavior, and the package declares a conflict to prevent the combination.

The source and release ZIP contain no ROM content, extracted game data, or game assets.
