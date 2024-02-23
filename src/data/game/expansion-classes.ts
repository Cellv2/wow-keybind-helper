import { PLAYER_CLASS, PlayerClass } from "@src/data/player/class/classes";
import { EXPANSION, Expansion } from "./expansions";

export type ClassesAllowedInExpansion = {
    expansion: Expansion;
    allowedClasses: PlayerClass[];
};

export const classesAllowedInExpansions: ClassesAllowedInExpansion[] = [
    {
        expansion: EXPANSION.CLASSIC,
        allowedClasses: [
            PLAYER_CLASS.DRUID,
            PLAYER_CLASS.HUNTER,
            PLAYER_CLASS.MAGE,
            PLAYER_CLASS.PALADIN,
            PLAYER_CLASS.PRIEST,
            PLAYER_CLASS.ROGUE,
            PLAYER_CLASS.SHAMAN,
            PLAYER_CLASS.WARLOCK,
            PLAYER_CLASS.WARRIOR
        ]
    },
    {
        expansion: EXPANSION.DRAGONFLIGHT,
        allowedClasses: [
            PLAYER_CLASS.DEATH_KNIGHT,
            PLAYER_CLASS.DEMON_HUNTER,
            PLAYER_CLASS.DRUID,
            PLAYER_CLASS.EVOKER,
            PLAYER_CLASS.HUNTER,
            PLAYER_CLASS.MAGE,
            PLAYER_CLASS.MONK,
            PLAYER_CLASS.PALADIN,
            PLAYER_CLASS.PRIEST,
            PLAYER_CLASS.ROGUE,
            PLAYER_CLASS.SHAMAN,
            PLAYER_CLASS.WARLOCK,
            PLAYER_CLASS.WARRIOR
        ]
    },
    {
        expansion: EXPANSION.WOTLK,
        allowedClasses: [
            PLAYER_CLASS.DEATH_KNIGHT,
            PLAYER_CLASS.DRUID,
            PLAYER_CLASS.HUNTER,
            PLAYER_CLASS.MAGE,
            PLAYER_CLASS.PALADIN,
            PLAYER_CLASS.PRIEST,
            PLAYER_CLASS.ROGUE,
            PLAYER_CLASS.SHAMAN,
            PLAYER_CLASS.WARLOCK,
            PLAYER_CLASS.WARRIOR
        ]
    }
];

// keeping the below around just for now, not decided on the structure of this yet
// type PlayerClass = {
//     allowedExpansions: Expansion[];
//     name: Class;
// };

// export const DeathKnight: PlayerClass = {
//     allowedExpansions: ["wotlk", "dragonflight"],
//     name: "Death Knight"
// };

// export const Druid: PlayerClass = {
//     allowedExpansions: ["classic", "wotlk", "dragonflight"],
//     name: "Druid"
// };

// export const Evoker: PlayerClass = {
//     allowedExpansions: ["dragonflight"],
//     name: "Evoker"
// };

// export const Hunter: PlayerClass = {
//     allowedExpansions: ["classic", "wotlk", "dragonflight"],
//     name: "Hunter"
// };

// export const Mage: PlayerClass = {
//     allowedExpansions: ["classic", "wotlk", "dragonflight"],
//     name: "Mage"
// };

// export const Paladin: PlayerClass = {
//     allowedExpansions: ["classic", "wotlk", "dragonflight"],
//     name: "Paladin"
// };

// export const Priest: PlayerClass = {
//     allowedExpansions: ["classic", "wotlk", "dragonflight"],
//     name: "Priest"
// };

// export const Rogue: PlayerClass = {
//     allowedExpansions: ["classic", "wotlk", "dragonflight"],
//     name: "Rogue"
// };

// export const Shaman: PlayerClass = {
//     allowedExpansions: ["classic", "wotlk", "dragonflight"],
//     name: "Shaman"
// };

// export const Warlock: PlayerClass = {
//     allowedExpansions: ["classic", "wotlk", "dragonflight"],
//     name: "Warlock"
// };

// export const Warrior: PlayerClass = {
//     allowedExpansions: ["classic", "wotlk", "dragonflight"],
//     name: "Warrior"
// };
