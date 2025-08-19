import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { PlayerService } from "./player.service";

import * as playerClassDataModule from "../../data/player/player-class";

describe("player-class service", () => {
    let sut: PlayerService;

    beforeEach(() => {
        sut = new PlayerService();
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    describe("getDataForPlayerClass", () => {
        it.skip("should return the data for the provided player class", () => {});
    });

    describe("getPlayerClassesForExpansion", () => {
        it.skip("should return the classes available for the provided expansion", () => {
            vi.spyOn(
                playerClassDataModule,
                "playerClassData",
                "get"
            ).mockResolvedValue([
                {
                    name: "ClassA",
                    displayName: "Class A",
                    availableExpansions: ["1", "2"],
                },
                {
                    name: "ClassB",
                    displayName: "Class B",
                    availableExpansions: ["2"],
                },
            ]);

            const expansionClasses = sut.getPlayerClassesForExpansion();
            expect(expansionClasses);
        });
    });

    describe("getPlayerRacesForExpansion", () => {
        it.skip("should return all player races for the provided expansion", () => {});
        it.skip("should be possible to determine the races per faction", () => {});
        it.skip("should show pandas... once? twice? I dunno yet", () => {});
    });
});
