import { ITEM_SLOT } from "@src/constants/equipment/item-slots.consts";
import { EXPANSION } from "@src/constants/game/expansion.consts";

export const GADGETS = {} as const;

export const HeadGadgets_Wotlk = [
    {
        expansion: EXPANSION.WOTLK,
        gadgets: [
            {
                slot: ITEM_SLOT.FEET
            }
        ]
    }
];
