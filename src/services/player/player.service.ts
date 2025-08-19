interface PlayerServiceInterface {
    getDataForPlayerClass: () => void;
    getPlayerClassesForExpansion: () => void;
    getPlayerRacesForExpansion: () => void;
}

export class PlayerService implements PlayerServiceInterface {
    getDataForPlayerClass = (): void => {};

    getPlayerClassesForExpansion = (): void => {};

    getPlayerRacesForExpansion = (): void => {};
}
