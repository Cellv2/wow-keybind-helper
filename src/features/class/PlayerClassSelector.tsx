import React from "react";
import { useAppDispatch, useAppSelector } from "src/app/hooks";
import { PLAYER_CLASS, PlayerClass } from "src/constants/player/class.consts";
import { selectPlayerClass, setPlayerClass } from "./playerClassSelectorSlice";

export const PlayerClassSelector = () => {
    const playerClass = useAppSelector(selectPlayerClass);

    const classElements = Object.values(PLAYER_CLASS).map((playerClassName) => (
        <PlayerClassSelection key={playerClassName} class={playerClassName} />
    ));

    return (
        <>
            {classElements}
            <div>Currely selected class: {playerClass}</div>
        </>
    );
};

type PlayerClassSelectionProps = {
    class: PlayerClass;
};

export const PlayerClassSelection = (props: PlayerClassSelectionProps) => {
    const dispatch = useAppDispatch();

    return <button onClick={() => dispatch(setPlayerClass(props.class))}>{props.class}</button>;
};
