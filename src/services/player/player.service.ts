import {
    playerClassData,
    PlayerDataClass,
} from "../../data/player/player-class";
import type { PlayerClass } from "../../data/player/player-class.types";

interface PlayerServiceInterface {
    getDataForPlayerClass: () => void;
    getPlayerClassesForExpansion: (expansion: string) => PlayerClass[];
    getPlayerRacesForExpansion: () => void;
}

export class PlayerService implements PlayerServiceInterface {
    getDataForPlayerClass = (): void => {};

    getPlayerClassesForExpansion = (expansion: string): PlayerClass[] => {
        console.log(playerClassData);

        console.log(typeof playerClassData); // 'object'
        console.log(playerClassData instanceof Promise); // true if it's a Promise
        const newClass = new PlayerDataClass();
        const x = newClass.getClasses();
        console.log(x instanceof Promise); // true if it's a Promise

        const isArr = Array.isArray(playerClassData);
        console.warn(`SERVICE:`, isArr);
        console.warn(playerClassData.constructor);

        console.log("x", x);

        const matches = x.filter((data) =>
            data.availableExpansions.includes(expansion)
        );

        console.log(matches);

        return matches;
    };

    getPlayerRacesForExpansion = (): void => {};
}
