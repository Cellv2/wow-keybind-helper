export const playerFactions = ["alliance", "horde"] as const;
export type PlayerFaction = (typeof playerFactions)[number];
