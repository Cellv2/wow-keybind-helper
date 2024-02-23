import { ITEM_SLOT } from "@src/data/game/item-slots";
import { WotlkSlotGadgets } from "@src/models/gadgets/wotlk-slot-gadgets";

export const WOTLK_GADGETS = {
    NITROS: "Nitro Boosts",
    ROCKET_GLOVES: "Hand-Mounted Pyro Rocket"
} as const;

export const SlotGadgets_Wotlk: WotlkSlotGadgets[] = [
    {
        slot: ITEM_SLOT.FEET,
        gadgets: [WOTLK_GADGETS.NITROS]
    },
    {
        slot: ITEM_SLOT.GLOVES,
        gadgets: [WOTLK_GADGETS.ROCKET_GLOVES]
    }
];
