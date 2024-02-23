import { ObjectValue } from "@src/types/utility.types";

export const FOOD_TYPE = {
    ARENA_WATER: "Arena Water",
    BUFF: "Buff Food",
    FOOD: "Vendor Food",
    MAGE: "Mage Food",
    WATER: "Vendor Water"
} as const;

export type FoodType = ObjectValue<typeof FOOD_TYPE>;
