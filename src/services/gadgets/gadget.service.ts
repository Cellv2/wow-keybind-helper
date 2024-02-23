import { ItemSlot } from "@src/data/game/item-slots";
import { SlotGadgets } from "@src/models/gadgets/slot-gadget";

interface GadgetServiceInterface<T extends SlotGadgets> {
    getAllGadgetsWithSlot: () => T[];

    getGadgetForSlot: (slot: ItemSlot) => T | null;
}

export abstract class GadgetService<T extends SlotGadgets> implements GadgetServiceInterface<T> {
    protected abstract readonly availableGadgets: T[];

    getAllGadgetNames = (): string[] => {
        return this.availableGadgets.flatMap((gadget) => gadget.gadgets);
    };

    getAllGadgetsWithSlot = (): T[] => {
        return this.availableGadgets;
    };

    getGadgetForSlot = (slot: ItemSlot): T | null => {
        const slotGadget = this.availableGadgets.find((gadget) => gadget.slot === slot) ?? null;
        return slotGadget;
    };
}
