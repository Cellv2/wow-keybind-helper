import { useAppSelector } from "@src/app/hooks";
import { classesAllowedInExpansions } from "@src/constants/game/expansion-classes.consts";
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
        <PlayerClassSelectionButton key={playerClassName} class={playerClassName} />
    ));

    return (
        <>
            <div className="grid grid-cols-2 gap-2">{classElements}</div>
            <div>Currely selected class: {selectedPlayerClass}</div>
        </>
    );
};
