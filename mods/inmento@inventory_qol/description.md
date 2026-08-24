# Inventory QoL

Inventory QoL is a standalone Gen1Recomp Mod API 2 quality-of-life mod for **Red, Blue, Yellow, Gold, and Silver**. It lifts ordinary item and Poké Ball stacks to **999**, keeps three-digit quantities readable, and adds a field-only batch action for permanent progression consumables.

| Feature | What it changes |
|---|---|
| **999 stacks** | Ordinary items and Poké Balls can stack up to 999. Existing pocket and slot limits remain intact, while key items, HMs, and badges remain singular. |
| **Quantity UI** | The Gen 1 Bag, Gen 2 Pack, and item-quantity selector render `×100` through `×999` without hiding the multiplier glyph. |
| **Gen 1 cursor memory** | The Bag restores its last selection and scroll position within the current play session. It never changes save data. |
| **USE MANY** | Rare Candies, HP Up, Protein, Iron, Carbos, Calcium, Zinc, and PP Ups receive a cap-aware **USE MANY** row while in the field. |

## Batch-use limits

The target is selected before the amount, allowing the selector to show only a legal number of uses. Rare Candies stop at level 100, each vitamin follows the original pre-Generation III 2,560-point stat-experience rule up to 25,600 per stat, and PP Up stops at three applications for the selected move. Rare Candy batches retain normal move-learning and evolution interaction instead of skipping it.

## Intentional limits

Poké Balls, X-items, healing items, status cures, PP recovery, repels, TMs, HMs, stones, key items, and field tools remain one-at-a-time. Their stopping conditions or battle timing depend on the live game state, so treating them as bulk progression items would not preserve ordinary behavior.

## Install

Download the latest `inventory_qol-<version>.zip` from the [release page](https://github.com/inmento/Inventory-QoL/releases). In Gen1Recomp, open **MODS**, choose **Import mod .zip**, import the archive, and enable the mod. The mod requires Gen1Recomp **0.2.14 or later**.

## Compatibility

Inventory QoL does not need other mods. It uses the standard bag-add path for its stack change, so normal items introduced by another mod can use the 999 cap.

**Inventory QoL 0.1.1 explicitly supports [Useful Bag](https://github.com/ShaneMcGovernIE/useful-bag).** Useful Bag is optional and remains the Gen 1 base screen when both are enabled, retaining its pockets, left/right cycling, sorting, PC behavior, and battle-aware selection. Inventory QoL decorates that same screen with its three-digit quantities, session-only cursor memory, and field-only `USE MANY` behavior.

Other mods that replace the same complete Bag or Pack screen IDs still require explicit compatibility testing unless they compose with the existing factory in the same way.

## Crystal runtime support

Version 0.2.0 validates the existing shared Gen 2 PackMenu path against the official Crystal runtime. It retains the mod’s existing Gen 1 and Gen 2 features, including Useful Bag layout compatibility.
