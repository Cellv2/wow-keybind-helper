import { type PlayerClass } from "./player-class.types";

export const playerClassData: PlayerClass[] = [
    { name: "x", availableExpansions: ["3"], displayName: "X" },
];

export class PlayerDataClass {
    classes = [{ name: "x", availableExpansions: ["3"], displayName: "X" }];

    getClasses() {
        return this.classes;
    }
}
