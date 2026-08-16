# Randomized Gym Challenge — WIP

**Randomized Gym Challenge** is an experimental new game mode for Pokémon Red, Blue, Yellow, and Gold. Rather than only moving existing leader parties, it can build a saved gym challenge around each physical gym’s intended team size and level curve.

All gameplay-changing options begin **off**. Players can independently enable randomized leaders, team composition, limited level variation, physical-gym type themes, evolution-stage matching, legal movesets, and Gold held items. A generated plan is stored per save so a team cannot change unexpectedly after save/load. The **Rebuild Challenge (Test)** option is provided for intentional WIP rerolls.

Each building keeps its original badge, reward, and progression flow. With leader randomization enabled, the visiting leader supplies the battle presentation while the physical gym still owns completion rewards. Gen 1 gym trainers and statue labels now follow the visiting leader as well. Gold held-item generation excludes key items, HMs, non-tossable items, and no-effect held items.

The alpha.3 pre-release also introduces an opt-in **Gym Challenge** flow. After naming the player, a Yes/No prompt can route a new run to the native starter lab, adjust the starter level for the first gym’s type matchup, then heal and route the player after each physical gym reward. Gold preserves the native first Hall of Fame and credits sequence before starting the Kanto gym phase on the next Continue boot.

> This is an **explicitly untested pre-release experimental build**. Test it on a separate save and use the repository’s testing checklist when reporting issues.

Do not enable this alongside **Gym Leader Shuffle**. Both mods alter gym-leader battle behavior, and the package declares a conflict to prevent the combination.

The source and release ZIP contain no ROM content, extracted game data, or game assets.
