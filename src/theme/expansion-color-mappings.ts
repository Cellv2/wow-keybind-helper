import { EXPANSION, Expansion } from "@src/data/game/expansions";
import { ButtonThemeMapping } from "@src/types/theme/ButtonThemeMapping";

type ExpansionColorMapping = {
    expansion: Expansion;
    hexColor: string;
    themeMapping: ButtonThemeMapping;
};

export const expansionColorMappings: ExpansionColorMapping[] = [
    {
        expansion: EXPANSION.CLASSIC,
        hexColor: "#F3E5AB",
        themeMapping: {
            background: "bg-expansionClassic",
            backgroundHover: "hover:bg-expansionClassic",
            ringColor: "ring-expansionClassic",
            textColor: "text-expansionClassic",
            textColorOnBackground: "text-slate-800",
            textColorOnBackgroundHover: "hover:text-slate-800"
        }
    },
    {
        expansion: EXPANSION.DRAGONFLIGHT,
        hexColor: "#3A1200",
        themeMapping: {
            background: "bg-expansionDragonflight",
            backgroundHover: "hover:bg-expansionDragonflight",
            ringColor: "ring-expansionDragonflight",
            textColor: "text-expansionDragonflight"
        }
    },
    {
        expansion: EXPANSION.WOTLK,
        hexColor: "#3463AC",
        themeMapping: {
            background: "bg-expansionWotlk",
            backgroundHover: "hover:bg-expansionWotlk",
            ringColor: "ring-expansionWotlk",
            textColor: "text-expansionWotlk"
        }
    }
];
