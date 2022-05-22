export const ALLIANCE_RACES = [
    "Draenei",
    "Dwarf",
    "Gnome",
    "Human",
    "NightElf",
] as const;
export type AllianceRaces = typeof ALLIANCE_RACES[number];

export const HORDE_RACES = [
    "BloodElf",
    "Orc",
    "Tauren",
    "Troll",
    "Undead",
] as const;
export type HordeRaces = typeof HORDE_RACES[number];
