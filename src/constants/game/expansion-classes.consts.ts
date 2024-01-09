import { PlayerClass } from "src/constants/player/class.consts";
import { Expansion } from "src/constants/game/expansion.consts";

export type ClassesAllowedInExpansion = {
    expansion: Expansion;
    allowedClasses: PlayerClass[];
};

export const classesAllowedInExpansions: ClassesAllowedInExpansion[] = [
    {
        expansion: "classic",
        allowedClasses: [
            "Druid",
            "Hunter",
            "Mage",
            "Paladin",
            "Priest",
            "Rogue",
            "Shaman",
            "Warlock",
            "Warrior"
        ]
    },
    {
        expansion: "wotlk",
        allowedClasses: [
            "Death Knight",
            "Druid",
            "Hunter",
            "Mage",
            "Paladin",
            "Priest",
            "Rogue",
            "Shaman",
            "Warlock",
            "Warrior"
        ]
    },
    {
        expansion: "dragonflight",
        allowedClasses: [
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
