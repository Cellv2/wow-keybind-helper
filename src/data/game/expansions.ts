import { ObjectValue } from "@src/types/utility.types";

export const EXPANSION = {
    CLASSIC: "classic",
    WOTLK: "wotlk",
    DRAGONFLIGHT: "dragonflight"
} as const;

// TODO: make this dynamic
export const SupportedExpansions = [EXPANSION.CLASSIC, EXPANSION.DRAGONFLIGHT, EXPANSION.WOTLK];

export type Expansion = ObjectValue<typeof EXPANSION>;
