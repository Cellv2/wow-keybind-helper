import { PLAYER_CLASS, PlayerClass } from "../constants/player/class.consts";

export type PlayerClassTailwindThemeOptions = {
    background: string;
    backgroundHover: string;
    outlineColor: string;
    ringColor: string;
    textColor: string;
    textColorOnBackground?: string;
    textColorOnBackgroundHover?: string;
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
        tailwindThemeName: {
            background: "bg-deathKnight",
            backgroundHover: "hover:bg-deathKnight",
            outlineColor: "outline-deathKnight",
            ringColor: "ring-deathKnight",
            textColor: "text-deathKnight"
        }
    },
    {
        playerClass: PLAYER_CLASS.DEMON_HUNTER,
        hexColor: "#A330C9",
        tailwindThemeName: {
            background: "bg-demonHunter",
            backgroundHover: "hover:bg-demonHunter",
            outlineColor: "outline-demonHunter",
            ringColor: "ring-demonHunter",
            textColor: "text-demonHunter"
        }
    },
    {
        playerClass: PLAYER_CLASS.DRUID,
        hexColor: "#FF7C0A",
        tailwindThemeName: {
            background: "bg-druid",
            backgroundHover: "hover:bg-druid",
            outlineColor: "outline-druid",
            ringColor: "ring-druid",
            textColor: "text-druid",
            textColorOnBackground: "text-slate-800",
            textColorOnBackgroundHover: "hover:text-slate-800"
        }
    },
    {
        playerClass: PLAYER_CLASS.EVOKER,
        hexColor: "#33937F",
        tailwindThemeName: {
            background: "bg-evoker",
            backgroundHover: "hover:bg-evoker",
            outlineColor: "outline-evoker",
            ringColor: "ring-evoker",
            textColor: "text-evoker"
        }
    },
    {
        playerClass: PLAYER_CLASS.HUNTER,
        hexColor: "#AAD372",
        tailwindThemeName: {
            background: "bg-hunter",
            backgroundHover: "hover:bg-hunter",
            outlineColor: "outline-hunter",
            ringColor: "ring-hunter",
            textColor: "text-hunter"
        }
    },
    {
        playerClass: PLAYER_CLASS.MAGE,
        hexColor: "#3FC7EB",
        tailwindThemeName: {
            background: "bg-mage",
            backgroundHover: "hover:bg-mage",
            outlineColor: "outline-mage",
            ringColor: "ring-mage",
            textColor: "text-mage"
        }
    },
    {
        playerClass: PLAYER_CLASS.MONK,
        hexColor: "#00FF98",
        tailwindThemeName: {
            background: "bg-monk",
            backgroundHover: "hover:bg-monk",
            outlineColor: "outline-monk",
            ringColor: "ring-monk",
            textColor: "text-monk"
        }
    },
    {
        playerClass: PLAYER_CLASS.PALADIN,
        hexColor: "#F48CBA",
        tailwindThemeName: {
            background: "bg-paladin",
            backgroundHover: "hover:bg-paladin",
            outlineColor: "outline-paladin",
            ringColor: "ring-paladin",
            textColor: "text-paladin",
            textColorOnBackground: "text-slate-800",
            textColorOnBackgroundHover: "hover:text-slate-800"
        }
    },
    {
        playerClass: PLAYER_CLASS.PRIEST,
        hexColor: "#FFFFFF",
        tailwindThemeName: {
            background: "bg-priest",
            backgroundHover: "hover:bg-priest",
            outlineColor: "outline-priest",
            ringColor: "ring-priest",
            textColor: "text-priest",
            textColorOnBackground: "text-slate-800",
            textColorOnBackgroundHover: "hover:text-slate-800"
        }
    },
    {
        playerClass: PLAYER_CLASS.ROGUE,
        hexColor: "#FFF468",
        tailwindThemeName: {
            background: "bg-rogue",
            backgroundHover: "hover:bg-rogue",
            outlineColor: "outline-rogue",
            ringColor: "ring-rogue",
            textColor: "text-rogue",
            textColorOnBackground: "text-slate-800",
            textColorOnBackgroundHover: "hover:text-slate-800"
        }
    },
    {
        playerClass: PLAYER_CLASS.SHAMAN,
        hexColor: "#0070DD",
        tailwindThemeName: {
            background: "bg-shaman",
            backgroundHover: "hover:bg-shaman",
            outlineColor: "outline-shaman",
            ringColor: "ring-shaman",
            textColor: "text-shaman"
        }
    },
    {
        playerClass: PLAYER_CLASS.WARLOCK,
        hexColor: "#8788EE",
        tailwindThemeName: {
            background: "bg-warlock",
            backgroundHover: "hover:bg-warlock",
            outlineColor: "outline-warlock",
            ringColor: "ring-warlock",
            textColor: "text-warlock"
        }
    },
    {
        playerClass: PLAYER_CLASS.WARRIOR,
        hexColor: "#C69B6D",
        tailwindThemeName: {
            background: "bg-warrior",
            backgroundHover: "hover:bg-warrior",
            outlineColor: "outline-warrior",
            ringColor: "ring-warrior",
            textColor: "text-warrior"
        }
    }
];
