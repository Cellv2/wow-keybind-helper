import { PlayerClass } from "./class.consts";

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
        class: "Death Knight",
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
        class: "Druid",
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
