export const playerClasses = [
    "Death Knight",
    "Druid",
    "Evoker",
    "Hunter",
    "Mage",
    "Monk",
    "Paladin",
    "Priest",
    "Rogue",
    "Shaman",
    "Warlock",
    "Warrior"
] as const;
export type PlayerClass = (typeof playerClasses)[number];
