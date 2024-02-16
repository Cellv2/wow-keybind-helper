import { ItemSlot } from "@src/constants/equipment/item-slots.consts";
import { CLASSIC_GADGETS } from "@src/data/professions/engineering/gadgets-classic";
import { ObjectValue } from "@src/types/utility.types";
import { SlotGadgets } from "./slot-gadget";

export type ClassicGadgets = ObjectValue<typeof CLASSIC_GADGETS>;

export interface ClassicSlotGadgets extends SlotGadgets {
    slot: ItemSlot;
    gadgets: ClassicGadgets[];
}
