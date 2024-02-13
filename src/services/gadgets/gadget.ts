import { SlotGadget } from "@src/models/gadgets/slot-gadget";

abstract class Gadgets {
    protected abstract availableGadgets: SlotGadget[];

    getAllGadgets = (): SlotGadget[] => {
        return this.availableGadgets;
    };

    abstract getGadgetForSlot<T>(slot: T): SlotGadget;
}
