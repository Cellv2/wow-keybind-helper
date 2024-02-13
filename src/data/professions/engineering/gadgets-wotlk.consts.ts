import { ITEM_SLOT } from "@src/constants/equipment/item-slots.consts";

export const WOTLK_GADGETS = {
    NITROS: "Nitro Boosts",
    ROCKET_GLOVES: "Hand-Mounted Pyro Rocket"
} as const;

export const Gadgets_Wotlk = [
    {
        slot: ITEM_SLOT.FEET,
        gadgets: [WOTLK_GADGETS.NITROS]
    },
    {
        slot: ITEM_SLOT.GLOVES,
        gadgets: [WOTLK_GADGETS.ROCKET_GLOVES]
    }
];
