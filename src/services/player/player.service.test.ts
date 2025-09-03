import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { PlayerService } from "./player.service";

import * as playerClassDataModule from "../../data/player/player-class";
// import { PlayerDataClass } from '../../data/player/player-class'
// import * as playerClassDataJsonModule from "../../data/player/playerClass.json";

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

            const mockPlayerClassData = [playerClassOne, playerClassTwo];
            console.warn(Array.isArray(mockPlayerClassData));

            // vi.spyOn(
            //     playerClassDataModule,
            //     "playerClassData",
            //     "get"
            // ).mockResolvedValue(mockPlayerClassData);

            // vi.spyOn(playerClassDataModule.PlayerDataClass, "prototype", "get").mockImplementation()

            // const PlayerDataClass = vi.fn();
            // // @ts-ignore - wadawdawdawdawd
            // PlayerDataClass.prototype.getClasses = vi.fn(() => mockPlayerClassData)
            // vi.spyOn(playerClassDataModule, "PlayerDataClass").mockImplementation(PlayerDataClass)

            vi.mock(
                import("../../data/player/player-class"),
                async (importOriginal) => {
                    const actual = await importOriginal();

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

                    const mockPlayerClassData = [
                        playerClassOne,
                        playerClassTwo,
                    ];

                    const PlayerDataClass = vi.fn();
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    PlayerDataClass.prototype.getClasses = vi.fn(
                        () => mockPlayerClassData
                    );

                    return { ...actual, PlayerDataClass };
                }
            );

            // // @ts-expect-error - things wad
            // vi.spyOn( playerClassDataJsonModule, "default", "get").mockResolvedValue(mockPlayerClassData)
            // vi.mock("../../data/player/playerClass.json", () => [playerClassOne, playerClassTwo])

            // vi.doMock("../../data/player/playerClass.json", () => ({ default: [playerClassOne, playerClassTwo]}))

            const expansionClasses = sut.getPlayerClassesForExpansion("1");
            expect(expansionClasses).toStrictEqual([playerClassOne]);

            const expansionClassesTwo = sut.getPlayerClassesForExpansion("2");
            expect(expansionClassesTwo).toStrictEqual([
                playerClassOne,
                playerClassTwo,
            ]);
        });
    });

    describe("getPlayerRacesForExpansion", () => {
        it.skip("should return all player races for the provided expansion", () => {});
        it.skip("should be possible to determine the races per faction", () => {});
        it.skip("should show pandas... once? twice? I dunno yet", () => {});
    });
});
