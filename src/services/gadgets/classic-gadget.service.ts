import { SlotGadgets_Classic } from "@src/data/professions/engineering/gadgets-classic";
import { ClassicSlotGadgets } from "@src/models/gadgets/classic-slot-gadgets";
import { GadgetService } from "./gadget.service";

export class ClassicGadgetService extends GadgetService<ClassicSlotGadgets> {
    protected availableGadgets = SlotGadgets_Classic;
}
