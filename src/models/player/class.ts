import { ObjectValue } from "../../types/utility.types";

export const PLAYER_CLASS = {
    DEATH_KNIGHT: "Death Knight",
    DEMON_HUNTER: "Demon Hunter",
    DRUID: "Druid",
    EVOKER: "Evoker",
    HUNTER: "Hunter",
    MAGE: "Mage",
    MONK: "Monk",
    PALADIN: "Paladin",
    PRIEST: "Priest",
    ROGUE: "Rogue",
    SHAMAN: "Shaman",
    WARLOCK: "Warlock",
    WARRIOR: "Warrior",
} as const;

export type PlayerClass = ObjectValue<typeof PLAYER_CLASS>;
