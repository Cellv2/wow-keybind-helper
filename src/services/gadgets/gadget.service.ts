import { ItemSlot } from "@src/constants/equipment/item-slots.consts";
import { SlotGadgets } from "@src/models/gadgets/slot-gadget";

interface GadgetServiceInterface<T extends SlotGadgets> {
    getAllGadgets: () => T[];

    getGadgetForSlot: (slot: ItemSlot) => T | null;
}

export abstract class GadgetService<T extends SlotGadgets> implements GadgetServiceInterface<T> {
    protected abstract readonly availableGadgets: T[];

    getAllGadgets = (): T[] => {
        return this.availableGadgets;
    };

    getGadgetForSlot = (slot: ItemSlot): T | null => {
        const x = this.availableGadgets.find((gadget) => gadget.slot === slot) ?? null;
        return x;
    };
}
