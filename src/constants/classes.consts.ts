export const classes = [
    "Death Knight",
    "Druid",
    "Evoker",
    "Hunter",
    "Mage",
    "Paladin",
    "Priest",
    "Rogue",
    "Shaman",
    "Warlock",
    "Warrior"
] as const;
export type Class = (typeof classes)[number];
