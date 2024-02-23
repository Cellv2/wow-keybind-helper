import { ItemSlot } from "@src/data/game/item-slots";
import { WOTLK_GADGETS } from "@src/data/professions/engineering/gadgets-wotlk";
import { ObjectValue } from "@src/types/utility.types";
import { SlotGadgets } from "./slot-gadget";

export type WotlkGadgets = ObjectValue<typeof WOTLK_GADGETS>;

export interface WotlkSlotGadgets extends SlotGadgets {
    slot: ItemSlot;
    gadgets: WotlkGadgets[];
}
