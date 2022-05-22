import { Classes } from "./classes.consts";
import { AllianceRaces, HordeRaces } from "./races.consts";

type ClassRaceMapping = {
    availableClasses: Classes[];
    race: AllianceRaces | HordeRaces;
};

export const CLASS_RACE_MAPPINGS: ClassRaceMapping[] = [
    {
        availableClasses: [
            "DeathKnight",
            "Hunter",
            "Mage",
            "Paladin",
            "Priest",
            "Rogue",
            "Warlock",
        ],
        race: "BloodElf",
    },
    {
        availableClasses: [
            "DeathKnight",
            "Hunter",
            "Mage",
            "Paladin",
            "Priest",
            "Shaman",
            "Warrior",
        ],
        race: "Draenei",
    },
    {
        availableClasses: [
            "DeathKnight",
            "Hunter",
            "Mage",
            "Paladin",
            "Priest",
            "Rogue",
            "Warrior",
        ],
        race: "Dwarf",
    },
    {
        availableClasses: [
            "DeathKnight",
            "Mage",
            "Rogue",
            "Warlock",
            "Warrior",
        ],
        race: "Gnome",
    },
    {
        availableClasses: [
            "DeathKnight",
            "Mage",
            "Paladin",
            "Priest",
            "Rogue",
            "Warlock",
            "Warrior",
        ],
        race: "Human",
    },
    {
        availableClasses: [
            "DeathKnight",
            "Druid",
            "Hunter",
            "Priest",
            "Rogue",
            "Warrior",
        ],
        race: "NightElf",
    },
    {
        availableClasses: [
            "DeathKnight",
            "Hunter",
            "Rogue",
            "Shaman",
            "Warlock",
            "Warrior",
        ],
        race: "Orc",
    },
    {
        availableClasses: [
            "DeathKnight",
            "Druid",
            "Hunter",
            "Shaman",
            "Warrior",
        ],
        race: "Tauren",
    },
    {
        availableClasses: [
            "DeathKnight",
            "Hunter",
            "Mage",
            "Priest",
            "Rogue",
            "Shaman",
            "Warrior",
        ],
        race: "Troll",
    },
    {
        availableClasses: [
            "DeathKnight",
            "Mage",
            "Priest",
            "Rogue",
            "Warlock",
            "Warrior",
        ],
        race: "Undead",
    },
];
