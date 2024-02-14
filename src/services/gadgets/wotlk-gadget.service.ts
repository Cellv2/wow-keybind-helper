import { SlotGadgets_Wotlk } from "@src/data/professions/engineering/gadgets-wotlk.consts";
import { WotlkSlotGadgets } from "@src/models/gadgets/wotlk-slot-gadgets";
import { GadgetService } from "./gadget.service";

export class WotlkGadgetService extends GadgetService<WotlkSlotGadgets> {
    protected availableGadgets = SlotGadgets_Wotlk;
}
