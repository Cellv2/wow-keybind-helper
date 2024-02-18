import { useAppDispatch, useAppSelector } from "@src/app/hooks";
import { classesAllowedInExpansions } from "@src/constants/game/expansion-classes.consts";
import { PlayerClass } from "@src/constants/player/class.consts";
import { playerClassColorMappings } from "@src/constants/theme/class-color-mappings";
import React from "react";
import { selectExpansion } from "../expansion/expansionSelectorSlice";
import { selectPlayerClass, setPlayerClass } from "./playerClassSelectorSlice";

export const PlayerClassSelector = () => {
    const selectedPlayerClass = useAppSelector(selectPlayerClass);
    const selectedExpansion = useAppSelector(selectExpansion);

    // should be fine, there shouldn't be duplicate expansion names
    const selectedExpansionAllowedClasses = classesAllowedInExpansions.filter(
        (item) => item.expansion === selectedExpansion
    )[0].allowedClasses;

    const classElements = selectedExpansionAllowedClasses.map((playerClassName) => (
        <PlayerClassSelection key={playerClassName} class={playerClassName} />
    ));

    return (
        <>
            <div className="grid grid-cols-2">{classElements}</div>
            <div>Currely selected class: {selectedPlayerClass}</div>
        </>
    );
};

type PlayerClassSelectionProps = {
    class: PlayerClass;
};

export const PlayerClassSelection = (props: PlayerClassSelectionProps) => {
    const dispatch = useAppDispatch();
    const color = playerClassColorMappings.find((mapping) => mapping.playerClass === props.class)
        ?.tailwindThemeName.background;

    return (
        <button
            className={`last:col-span-2 ${color}`}
            onClick={() => dispatch(setPlayerClass(props.class))}
        >
            {props.class}
        </button>
    );
};
