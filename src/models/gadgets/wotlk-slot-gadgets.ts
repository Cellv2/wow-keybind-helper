import { ItemSlot } from "@src/constants/equipment/item-slots.consts";
import { WOTLK_GADGETS } from "@src/data/professions/engineering/gadgets-wotlk.consts";
import { ObjectValue } from "@src/types/utility.types";
import { SlotGadgets } from "./slot-gadget";

export type WotlkGadgets = ObjectValue<typeof WOTLK_GADGETS>;

export interface WotlkSlotGadgets extends SlotGadgets {
    slot: ItemSlot;
    gadgets: WotlkGadgets[];
}
