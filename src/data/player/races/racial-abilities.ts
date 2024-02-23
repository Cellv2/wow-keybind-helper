import { EXPANSION, Expansion } from "@src/data/game/expansions";
import { ObjectValue } from "@src/types/utility.types";
import { PLAYER_RACE, PlayerRace } from "./races";

const ACTIVE_RACIAL_ABILITIES = {
    ANCESTRAL_CALL: "Ancestral Call",
    ARCANE_PULSE: "Arcane Pulse",
    ARCANE_TORRENT: "Arcane Torrent",
    BERSERKING: "Berserking",
    BLOOD_FURY: "Blood Fury",
    BULL_RUSH: "Bull Rush",
    CANNIBALIZE: "Cannibalize",
    DARKFLIGHT: "Darkflight",
    ESCAPE_ARTIST: "Escape Artist",
    FIREBLOOD: "Fireblood",
    GIFT_OF_THE_NAARU: "Gift of the Naaru",
    GLIDE: "Glide",
    HAYMAKER: "Haymaker",
    HYPER_ORGANIC_LIGHT_ORIGINATOR: "Hyper Organic Light Originator",
    LIGHTS_JUDGEMENT: "Light's Judgement",
    MANA_TAP: "Mana Tap",
    PTERRORDAX_SWOOP: "Pterrordax Swoop",
    QUAKING_PALM: "Quaking Palm",
    REGENERATIN: "Regeneratin'",
    ROCKET_BARRAGE: "Rocket Barrage",
    ROCKET_JUMP: "Rocket Jump",
    SHADOWMELD: "Shadowmeld",
    SKYWARD_ASCENT: "Skyward Ascent",
    SOAR: "Soar",
    SPATIAL_RIFT: "Spatial Rift",
    STONEFORM: "Stoneform",
    SURGE_FORWARD: "Surge Forward",
    TAIL_SWIPE: "Tail Swipe",
    WAR_STOMP: "War Stomp",
    WILL_TO_SURVIVE: "Will To Survive",
    WILL_OF_THE_FORSAKEN: "Will of the Forsaken",
    WING_BUFFET: "Wing Buffet"
} as const;

type ActiveRacialAbility = ObjectValue<typeof ACTIVE_RACIAL_ABILITIES>;

type ExpansionRacialAbilities = {
    expansion: Expansion[];
    activeRacialAbilities: ActiveRacialAbility[];
};

export type RacialAbilities = {
    race: PlayerRace;
    racialAbilities: ExpansionRacialAbilities[];
};
export const racialAbilities: RacialAbilities[] = [
    {
        race: PLAYER_RACE.BLOOD_ELF,
        racialAbilities: [
            {
                expansion: [EXPANSION.WOTLK],
                activeRacialAbilities: [
                    ACTIVE_RACIAL_ABILITIES.ARCANE_TORRENT,
                    ACTIVE_RACIAL_ABILITIES.MANA_TAP
                ]
            },
            {
                expansion: [EXPANSION.DRAGONFLIGHT],
                activeRacialAbilities: [ACTIVE_RACIAL_ABILITIES.ARCANE_TORRENT]
            }
        ]
    },
    {
        race: PLAYER_RACE.DARK_IRON_DWARF,
        racialAbilities: [
            {
                expansion: [EXPANSION.DRAGONFLIGHT],
                activeRacialAbilities: [ACTIVE_RACIAL_ABILITIES.FIREBLOOD]
            }
        ]
    },
    {
        race: PLAYER_RACE.DRACTHYR,
        racialAbilities: [
            {
                expansion: [EXPANSION.DRAGONFLIGHT],
                activeRacialAbilities: [
                    ACTIVE_RACIAL_ABILITIES.GLIDE,
                    ACTIVE_RACIAL_ABILITIES.SOAR,
                    ACTIVE_RACIAL_ABILITIES.SKYWARD_ASCENT,
                    ACTIVE_RACIAL_ABILITIES.SURGE_FORWARD,
                    ACTIVE_RACIAL_ABILITIES.TAIL_SWIPE,
                    ACTIVE_RACIAL_ABILITIES.WING_BUFFET
                ]
            }
        ]
    },
    {
        race: PLAYER_RACE.DRAENEI,
        racialAbilities: [
            {
                expansion: [EXPANSION.DRAGONFLIGHT, EXPANSION.WOTLK],
                activeRacialAbilities: [ACTIVE_RACIAL_ABILITIES.GIFT_OF_THE_NAARU]
            }
        ]
    },
    {
        race: PLAYER_RACE.DWARF,
        racialAbilities: [
            {
                expansion: [EXPANSION.CLASSIC, EXPANSION.DRAGONFLIGHT, EXPANSION.WOTLK],
                activeRacialAbilities: [ACTIVE_RACIAL_ABILITIES.STONEFORM]
            }
        ]
    },
    {
        race: PLAYER_RACE.GNOME,
        racialAbilities: [
            {
                expansion: [EXPANSION.CLASSIC, EXPANSION.DRAGONFLIGHT, EXPANSION.WOTLK],
                activeRacialAbilities: [ACTIVE_RACIAL_ABILITIES.ESCAPE_ARTIST]
            }
        ]
    },
    {
        race: PLAYER_RACE.GOBLIN,
        racialAbilities: [
            {
                expansion: [EXPANSION.DRAGONFLIGHT],
                activeRacialAbilities: [
                    ACTIVE_RACIAL_ABILITIES.ROCKET_BARRAGE,
                    ACTIVE_RACIAL_ABILITIES.ROCKET_JUMP
                ]
            }
        ]
    },
    {
        race: PLAYER_RACE.HIGHMOUNTAIN_TAUREN,
        racialAbilities: [
            {
                expansion: [EXPANSION.DRAGONFLIGHT],
                activeRacialAbilities: [ACTIVE_RACIAL_ABILITIES.BULL_RUSH]
            }
        ]
    }
];
