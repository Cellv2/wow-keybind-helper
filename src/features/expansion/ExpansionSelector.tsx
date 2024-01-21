import React from "react";
import { useAppDispatch, useAppSelector } from "src/app/hooks";
import { EXPANSION } from "src/constants/game/expansion.consts";
import { selectExpansion, setExpansion } from "./expansionSelectorSlice";

// type ExpansionSelectorProps = {};

// export const ExpansionSelector = (props: ExpansionSelectorProps) => {
export const ExpansionSelector = () => {
    const expansion = useAppSelector(selectExpansion);
    const dispatch = useAppDispatch();

    return (
        <>
            <button onClick={() => dispatch(setExpansion(EXPANSION.CLASSIC))}>Classic</button>
            <button onClick={() => dispatch(setExpansion(EXPANSION.WOTLK))}>Wrath</button>
            <button onClick={() => dispatch(setExpansion(EXPANSION.DRAGONFLIGHT))}>
                Dragonflight
            </button>
            <br />
            <p>Selelected expansion is: {expansion}</p>
        </>
    );
};
