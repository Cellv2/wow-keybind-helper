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
        it("should return the classes available for the provided expansion", () => {
            const playerClassOne = {
                name: "ClassA",
                displayName: "Class A",
                availableExpansions: ["1", "2"],
            };

            const playerClassTwo = {
                name: "ClassB",
                displayName: "Class B",
                availableExpansions: ["2"],
            };

            vi.spyOn(
                playerClassDataModule,
                "playerClassData",
                "get"
            ).mockResolvedValue([playerClassOne, playerClassTwo]);

            const expansionClasses = sut.getPlayerClassesForExpansion("1");
            expect(expansionClasses).toBe(playerClassOne);

            const expansionClassesTwo = sut.getPlayerClassesForExpansion("2");
            expect(expansionClassesTwo).toBe([playerClassOne, playerClassTwo]);
        });
    });

    describe("getPlayerRacesForExpansion", () => {
        it.skip("should return all player races for the provided expansion", () => {});
        it.skip("should be possible to determine the races per faction", () => {});
        it.skip("should show pandas... once? twice? I dunno yet", () => {});
    });
});
