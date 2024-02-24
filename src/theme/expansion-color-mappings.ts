import { EXPANSION, Expansion } from "@src/data/game/expansions";

type ExpansionColorMapping = {
    expansion: Expansion;
    hexColor: string;
};

export const expansionColorMappings: ExpansionColorMapping[] = [
    {
        expansion: EXPANSION.CLASSIC,
        hexColor: "#F3E5AB"
    },
    {
        expansion: EXPANSION.DRAGONFLIGHT,
        hexColor: "#3A1200"
    },
    {
        expansion: EXPANSION.WOTLK,
        hexColor: "#3463AC"
    }
];
