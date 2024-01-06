export const expansions = ["classic", "wotlk", "dragonflight"] as const;
export type Expansion = (typeof expansions)[number];
