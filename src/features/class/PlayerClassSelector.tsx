import { useAppSelector } from "@src/app/hooks";
import { classesAllowedInExpansions } from "@src/data/game/expansion-classes";
import React from "react";
import { selectExpansion } from "../expansion/expansionSelectorSlice";
import { PlayerClassSelectionButton } from "./PlayerClassSelectionButton";
import { selectPlayerClass } from "./playerClassSelectorSlice";

export const PlayerClassSelector = () => {
    const selectedPlayerClass = useAppSelector(selectPlayerClass);
    const selectedExpansion = useAppSelector(selectExpansion);

    // should be fine, there shouldn't be duplicate expansion names
    const selectedExpansionAllowedClasses = classesAllowedInExpansions.filter(
        (item) => item.expansion === selectedExpansion
    )[0].allowedClasses;

    const classElements = selectedExpansionAllowedClasses.map((playerClassName) => (
        <PlayerClassSelectionButton
            key={playerClassName}
            currentClassSelection={selectedPlayerClass}
            playerClass={playerClassName}
        />
    ));

    return (
        <>
            <div className="grid grid-cols-2 gap-2">{classElements}</div>
            <div>Currely selected class: {selectedPlayerClass}</div>
        </>
    );
};
