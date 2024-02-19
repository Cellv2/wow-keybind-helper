import { PLAYER_CLASS, PlayerClass } from "../constants/player/class.consts";

export type PlayerClassTailwindThemeOptions = {
    background: string;
    textColorOnBackground?: string;
};

export type PlayerClassColorMapping = {
    playerClass: PlayerClass;
    hexColor: string;
    tailwindThemeName: PlayerClassTailwindThemeOptions;
};

// https://wowpedia.fandom.com/wiki/Class_colors
// https://tailwindcss.com/docs/content-configuration#dynamic-class-names
export const playerClassColorMappings: PlayerClassColorMapping[] = [
    {
        playerClass: PLAYER_CLASS.DEATH_KNIGHT,
        hexColor: "#C41E3A",
        tailwindThemeName: { background: "bg-deathKnight" }
    },
    {
        playerClass: PLAYER_CLASS.DEMON_HUNTER,
        hexColor: "#A330C9",
        tailwindThemeName: { background: "bg-demonHunter" }
    },
    {
        playerClass: PLAYER_CLASS.DRUID,
        hexColor: "#FF7C0A",
        tailwindThemeName: { background: "bg-druid" }
    },
    {
        playerClass: PLAYER_CLASS.EVOKER,
        hexColor: "#33937F",
        tailwindThemeName: { background: "bg-evoker" }
    },
    {
        playerClass: PLAYER_CLASS.HUNTER,
        hexColor: "#AAD372",
        tailwindThemeName: { background: "bg-hunter" }
    },
    {
        playerClass: PLAYER_CLASS.MAGE,
        hexColor: "#3FC7EB",
        tailwindThemeName: { background: "bg-mage" }
    },
    {
        playerClass: PLAYER_CLASS.MONK,
        hexColor: "#00FF98",
        tailwindThemeName: { background: "bg-monk" }
    },
    {
        playerClass: PLAYER_CLASS.PALADIN,
        hexColor: "#F48CBA",
        tailwindThemeName: { background: "bg-paladin" }
    },
    {
        playerClass: PLAYER_CLASS.PRIEST,
        hexColor: "#FFFFFF",
        tailwindThemeName: { background: "bg-priest", textColorOnBackground: "text-slate-800" }
    },
    {
        playerClass: PLAYER_CLASS.ROGUE,
        hexColor: "#FFF468",
        tailwindThemeName: { background: "bg-rogue", textColorOnBackground: "text-slate-800" }
    },
    {
        playerClass: PLAYER_CLASS.SHAMAN,
        hexColor: "#0070DD",
        tailwindThemeName: { background: "bg-shaman" }
    },
    {
        playerClass: PLAYER_CLASS.WARLOCK,
        hexColor: "#8788EE",
        tailwindThemeName: { background: "bg-warlock" }
    },
    {
        playerClass: PLAYER_CLASS.WARRIOR,
        hexColor: "#C69B6D",
        tailwindThemeName: { background: "bg-warrior" }
    }
];
