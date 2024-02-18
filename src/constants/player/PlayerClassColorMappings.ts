import { PLAYER_CLASS, PlayerClass } from "./class.consts";

export type PlayerClassColorMapping = {
    playerClass: PlayerClass;
    hexColor: string;
};

// https://wowpedia.fandom.com/wiki/Class_colors
export const PlayerClassColorMappings: PlayerClassColorMapping[] = [
    {
        playerClass: PLAYER_CLASS.DEATH_KNIGHT,
        hexColor: "#C41E3A"
    },
    { playerClass: PLAYER_CLASS.DRUID, hexColor: "#FF7C0A" },
    { playerClass: PLAYER_CLASS.EVOKER, hexColor: "#33937F" },
    { playerClass: PLAYER_CLASS.HUNTER, hexColor: "#AAD372" },
    { playerClass: PLAYER_CLASS.MAGE, hexColor: "#3FC7EB" },
    { playerClass: PLAYER_CLASS.MONK, hexColor: "#00FF98" },
    { playerClass: PLAYER_CLASS.PALADIN, hexColor: "#F48CBA" },
    { playerClass: PLAYER_CLASS.PRIEST, hexColor: "#FFFFFF" },
    { playerClass: PLAYER_CLASS.ROGUE, hexColor: "#FFF468" },
    { playerClass: PLAYER_CLASS.SHAMAN, hexColor: "#0070DD" },
    { playerClass: PLAYER_CLASS.WARLOCK, hexColor: "#8788EE" },
    { playerClass: PLAYER_CLASS.WARRIOR, hexColor: "#C69B6D" }
];
