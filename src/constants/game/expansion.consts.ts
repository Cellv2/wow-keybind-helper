import { ObjectValue } from "@src/types/utility.types";

export const EXPANSION = {
    CLASSIC: "classic",
    WOTLK: "wotlk",
    DRAGONFLIGHT: "dragonflight"
} as const;

export type Expansion = ObjectValue<typeof EXPANSION>;
