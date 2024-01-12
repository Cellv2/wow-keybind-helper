import { ObjectValue } from "src/types/utility.types";

export const PLAYER_FACTION = {
    ALLIANCE: "alliance",
    HORDE: "horde"
} as const;

export type PlayerFaction = ObjectValue<typeof PLAYER_FACTION>;
