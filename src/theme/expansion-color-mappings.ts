import { EXPANSION, Expansion } from "@src/data/game/expansions";

type ExpansionTailwindThemeOption = {
    backgroundHover: string;
    ringColor: string;
    textColor: string;
    textColorOnBackground?: string;
    textColorOnBackgroundHover?: string;
};

type ExpansionColorMapping = {
    expansion: Expansion;
    hexColor: string;
    tailwindThemeOptions: ExpansionTailwindThemeOption;
};

export const expansionColorMappings: ExpansionColorMapping[] = [
    {
        expansion: EXPANSION.CLASSIC,
        hexColor: "#F3E5AB",
        tailwindThemeOptions: {
            backgroundHover: "hover:bg-expansionClassic",
            ringColor: "ring-expansionClassic",
            textColor: "text-expansionClassic",
            textColorOnBackgroundHover: "hover:text-slate-800"
        }
    },
    {
        expansion: EXPANSION.DRAGONFLIGHT,
        hexColor: "#3A1200",
        tailwindThemeOptions: {
            backgroundHover: "hover:bg-expansionDragonflight",
            ringColor: "ring-expansionDragonflight",
            textColor: "text-expansionDragonflight"
        }
    },
    {
        expansion: EXPANSION.WOTLK,
        hexColor: "#3463AC",
        tailwindThemeOptions: {
            backgroundHover: "hover:bg-expansionWotlk",
            ringColor: "ring-expansionWotlk",
            textColor: "text-expansionWotlk"
        }
    }
];
