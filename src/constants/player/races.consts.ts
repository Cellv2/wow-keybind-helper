import { ObjectValue } from "src/types/utility.types";

export const PLAYER_RACE = {
    BLOOD_ELF: "Blood Elf",
    DARK_IRON_DWARF: "Dark Iron Dwarf",
    DRACTHYR: "Dracthyr",
    DRAENEI: "Draenei",
    DWARF: "Dwarf",
    GNOME: "Gnome",
    GOBLIN: "Goblin",
    HIGHMOUNTAIN_TAUREN: "Highmountain Tauren",
    HUMAN: "Human",
    KUL_TIRAN: "Kul Tiran",
    LIGHTFORGED_DRAENEI: "Lightforged Draenei",
    MAGHAR_ORC: "Mag'har Orc",
    MECHAGNOME: "Mechagnome",
    NIGHT_ELF: "Night Elf",
    NIGHTBORNE: "Nightborne",
    ORC: "Orc",
    PANDAREN: "Pandaren",
    TAUREN: "Tauren",
    TROLL: "Troll",
    VOID_ELF: "Void Elf",
    VULPERA: "Vulpera",
    WORGEN: "Worgen",
    ZANDALARI_TROLL: "Zandalari Troll"
} as const;

export type PlayerRace = ObjectValue<typeof PLAYER_RACE>;
