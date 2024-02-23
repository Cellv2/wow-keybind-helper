import { useAppDispatch, useAppSelector } from "@src/app/hooks";
import { classesAllowedInExpansions } from "@src/data/game/expansion-classes";
import { EXPANSION, Expansion } from "@src/data/game/expansions";
import React from "react";
import { selectPlayerClass, setPlayerClass } from "../class/playerClassSelectorSlice";
import { selectExpansion, setExpansion } from "./expansionSelectorSlice";

// type ExpansionSelectorProps = {};

// export const ExpansionSelector = (props: ExpansionSelectorProps) => {
export const ExpansionSelector = () => {
    const selectedPlayerClass = useAppSelector(selectPlayerClass);
    const selectedExpansion = useAppSelector(selectExpansion);
    const dispatch = useAppDispatch();

    const handleSetExpansionOnClick = (expansionSelection: Expansion) => {
        // should be fine, there shouldn't be duplicate expansion names
        const selectedExpansionAllowedClasses = classesAllowedInExpansions.filter(
            (item) => item.expansion === expansionSelection
        )[0].allowedClasses;

        // we make sure that the class is actually allowed in the expansion we pick
        if (!selectedExpansionAllowedClasses.includes(selectedPlayerClass)) {
            dispatch(setPlayerClass(selectedExpansionAllowedClasses[0]));
        }

        dispatch(setExpansion(expansionSelection));
    };

    return (
        <>
            <button onClick={() => handleSetExpansionOnClick(EXPANSION.CLASSIC)}>Classic</button>
            <button onClick={() => handleSetExpansionOnClick(EXPANSION.WOTLK)}>Wrath</button>
            <button onClick={() => handleSetExpansionOnClick(EXPANSION.DRAGONFLIGHT)}>
                Dragonflight
            </button>
            <br />
            <p>Selelected expansion is: {selectedExpansion}</p>
        </>
    );
};
