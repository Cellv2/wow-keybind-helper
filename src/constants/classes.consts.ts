export const CLASSES = [
    "DeathKnight",
    "Druid",
    "Hunter",
    "Mage",
    "Paladin",
    "Priest",
    "Rogue",
    "Shaman",
    "Warlock",
    "Warrior",
] as const;
export type Classes = typeof CLASSES[number];
