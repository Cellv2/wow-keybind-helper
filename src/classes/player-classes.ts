import { Class } from "src/constants/classes.consts";
import { Expansion } from "src/constants/expansions.consts";

type PlayerClass = {
    allowedExpansions: Expansion[];
    name: Class;
};

export const DeathKnight: PlayerClass = {
    allowedExpansions: ["wotlk", "dragonflight"],
    name: "Death Knight"
};

export const Druid: PlayerClass = {
    allowedExpansions: ["classic", "wotlk", "dragonflight"],
    name: "Druid"
};

export const Evoker: PlayerClass = {
    allowedExpansions: ["dragonflight"],
    name: "Evoker"
};

export const Hunter: PlayerClass = {
    allowedExpansions: ["classic", "wotlk", "dragonflight"],
    name: "Hunter"
};

export const Mage: PlayerClass = {
    allowedExpansions: ["classic", "wotlk", "dragonflight"],
    name: "Mage"
};

export const Paladin: PlayerClass = {
    allowedExpansions: ["classic", "wotlk", "dragonflight"],
    name: "Paladin"
};

export const Priest: PlayerClass = {
    allowedExpansions: ["classic", "wotlk", "dragonflight"],
    name: "Priest"
};

export const Rogue: PlayerClass = {
    allowedExpansions: ["classic", "wotlk", "dragonflight"],
    name: "Rogue"
};

export const Shaman: PlayerClass = {
    allowedExpansions: ["classic", "wotlk", "dragonflight"],
    name: "Shaman"
};

export const Warlock: PlayerClass = {
    allowedExpansions: ["classic", "wotlk", "dragonflight"],
    name: "Warlock"
};

export const Warrior: PlayerClass = {
    allowedExpansions: ["classic", "wotlk", "dragonflight"],
    name: "Warrior"
};
