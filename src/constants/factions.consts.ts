export const factions = ["alliance", "horde"] as const;
export type Factions = (typeof factions)[number];
