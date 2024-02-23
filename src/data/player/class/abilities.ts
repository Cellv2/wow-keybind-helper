import { PLAYER_CLASS, PlayerClass } from "./classes";

export type Ability = {
    name: string;
};

export type Talent = {
    name: string;
};

export type ClassAbilities = {
    class: PlayerClass;
    abilities: Ability[];
    talents: Talent[];
};

export const classAbilities: ClassAbilities[] = [
    {
        class: PLAYER_CLASS.DEATH_KNIGHT,
        abilities: [
            {
                name: "Death Grip"
            },
            {
                name: "Death and Decay"
            }
        ],
        talents: []
    },
    {
        class: PLAYER_CLASS.DRUID,
        abilities: [
            {
                name: "Entangling Roots"
            }
        ],
        talents: [
            {
                name: "Nature's Swiftness"
            }
        ]
    }
];
