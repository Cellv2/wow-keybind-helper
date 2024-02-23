import { ObjectValue } from "@src/types/utility.types";

export const ITEM_SLOT = {
    AMMO: "Ammo",
    HEAD: "Head",
    NECK: "Neck",
    SHOULDER: "Shoulder",
    SHIRT: "Shirt",
    CHEST: "Chest",
    BELT: "Belt",
    LEGS: "Legs",
    FEET: "Feet",
    WRIST: "Wrist",
    GLOVES: "Gloves",
    FINGER_1: "Finger 1",
    FINGER_2: "Finger 2",
    TRINKET_1: "Trinket 1",
    TRINKET_2: "Trinket 2",
    BACK: "Back",
    MAIN_HAND: "Main Hand",
    OFF_HAND: "Off Hand",
    RANGED: "Ranged",
    TABARD: "Tabard"
} as const;

export type ItemSlot = ObjectValue<typeof ITEM_SLOT>;
