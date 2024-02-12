import { ObjectValue } from "@src/types/utility.types";

export const POTION_TYPE = {
    ENERGY: "Thistle Tea",
    INVISIBILITY: "Invisibility Potion",
    HEALTH: "Health Potion",
    MANA: "Mana Potion",
    RAGE: "Rage Potion"
} as const;

export type PotionType = ObjectValue<typeof POTION_TYPE>;
