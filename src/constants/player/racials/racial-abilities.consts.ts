import { Expansion } from "src/constants/game/expansion.consts";
import { PlayerRace } from "../races.consts";

const activeRacialAbilities = [
    "Ancestral Call",
    "Arcane Pulse",
    "Arcane Torrent",
    "Berserking",
    "Blood Fury",
    "Bull Rush",
    "Cannibalize",
    "Darkflight",
    "Escape Artist",
    "Fireblood",
    "Gift of the Naaru",
    "Glide",
    "Haymaker",
    "Hyper Organic Light Originator",
    "Light's Judgement",
    "Mana Tap",
    "Pterrordax Swoop",
    "Quaking Palm",
    "Regeneratin'",
    "Rocket Barrage",
    "Rocket Jump",
    "Shadowmeld",
    "Skyward Ascent",
    "Soar",
    "Spatial Rift",
    "Stoneform",
    "Surge Forward",
    "Tail Swipe",
    "War Stomp",
    "Will To Survive",
    "Will of the Forsaken",
    "Wing Buffet"
] as const;
export type ActiveRacialAbility = (typeof activeRacialAbilities)[number];

type ExpansionRacialAbilities = {
    expansion: Expansion;
    activeRacialAbilities: ActiveRacialAbility[];
};

export type RacialAbilities = {
    race: PlayerRace;
    racialAbilities: ExpansionRacialAbilities[];
};

export const racialAbilities: RacialAbilities[] = [
    {
        race: "Blood Elf",
        racialAbilities: [
            {
                expansion: "wotlk",
                activeRacialAbilities: ["Arcane Torrent", "Mana Tap"]
            },
            {
                expansion: "dragonflight",
                activeRacialAbilities: ["Arcane Torrent"]
            }
        ]
    },
    {
        race: "Dracthyr",
        racialAbilities: [
            {
                expansion: "dragonflight",
                activeRacialAbilities: [
                    "Glide",
                    "Soar",
                    "Skyward Ascent",
                    "Surge Forward",
                    "Tail Swipe",
                    "Wing Buffet"
                ]
            }
        ]
    }
];
