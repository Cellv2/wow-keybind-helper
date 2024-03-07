import { PlayerClass } from "@src/data/player/class/classes";

interface PlayerClassServiceInterface {
    getClassAbilities: (playerClass: PlayerClass) => string[];
}

export class PlayerClassService implements PlayerClassServiceInterface {
    getClassAbilities = (playerClass: PlayerClass): string[] => {
        if (playerClass === "Druid") {
            return ["Rake", "Rip", "Cyclone"];
        }

        if (playerClass === "Death Knight") {
            return ["Death Grip", "Icy Touch", "Plague Strike"];
        }

        return ["Not", "A", "Druid", "Or", "Death Knight"];
    };
}
