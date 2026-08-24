# Typed Metronomes

**Typed Metronomes** is a Gen1Recomp Mod API 2 gameplay/content mod for **Generation 1 and Generation 2**. It adds new numbered TM-style items that teach learned moves such as `N-METRO`, `ELEC-METRO`, and `PSY-METRO`. When used in battle, each learned move calls a random move from its assigned type pool through the native battle resolver, so the selected move keeps its normal targeting, accuracy, damage, animation, and special effects.

## Type Academy catalogue

The items are sold individually for **₽3,000** on a Type Academy shelf appended to the ordinary shop inventory.

| Game generation | Shop | Catalogue |
|---|---|---|
| Gen 1 | Pewter City Poké Mart | TM51–TM65: Normal through Dragon |
| Gen 2 | Violet City Poké Mart | TM51–TM68: Normal through Dragon, plus Dark, Steel, and ??? |

A Pokémon may learn a typed Metronome when **either its primary or secondary type** matches that TM. Its ordinary TM compatibility and the learnability of potential called moves do not restrict this eligibility. The native Bag/Pack teaching and move-replacement flow remains in charge, including refusal to teach a duplicate move and consumption only after successful learning.

## Pool behavior

The original `METRONOME` and all Typed Metronome moves are excluded from every pool, preventing recursion. In Generation 1, `STRUGGLE` is included only in the Normal pool and retains its normal typeless-damage behavior. In Generation 2, `CURSE` is included once in every typed pool.

For a Curse specifically called by a Typed Metronome, the Ghost branch checks the user’s **primary type only**. Ghost/Poison receives the Ghost Curse effect, while Poison/Ghost receives the non-Ghost stat-stage effect. Normal Curse outside a Typed Metronome is unchanged.

## Install

Download the latest installer from the [Typed Metronomes release page](https://github.com/inmento/Typed-Metronomes/releases). In Gen1Recomp, open **MODS**, choose **Import mod .zip**, select the downloaded archive, and enable the mod for the game you are playing. The mod requires Gen1Recomp **0.2.19 or later**.

## Compatibility

Typed Metronomes does not require other mods. It reads the active move and species data when constructing its type pools and TM eligibility, allowing compatible move additions, type edits, and added species to participate. Since it adds moves, items, and battle behavior, players in a link session should use the same enabled-mod set and version.

## Crystal runtime support

Version 0.2.0 validates Crystal through the shared Gen 2 typed-move, TM, Pack, Curse, and Type Academy route. No move pools or gameplay rules were changed for this compatibility release.
