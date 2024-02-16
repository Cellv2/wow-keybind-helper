import { ITEM_SLOT } from "@src/constants/equipment/item-slots.consts";
import { ClassicSlotGadgets } from "@src/models/gadgets/classic-slot-gadgets";

export const CLASSIC_GADGETS = {
    NITROS: "Nitro Boosts",
    ROCKET_GLOVES: "Hand-Mounted Pyro Rocket"
} as const;

export const SlotGadgets_Classic: ClassicSlotGadgets[] = [
    {
        slot: ITEM_SLOT.FEET,
        gadgets: [CLASSIC_GADGETS.NITROS]
    },
    {
        slot: ITEM_SLOT.GLOVES,
        gadgets: [CLASSIC_GADGETS.ROCKET_GLOVES]
    }
];
