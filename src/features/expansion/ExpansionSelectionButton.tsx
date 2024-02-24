import { useAppDispatch, useAppSelector } from "@src/app/hooks";
import { classesAllowedInExpansions } from "@src/data/game/expansion-classes";
import { Expansion } from "@src/data/game/expansions";
import React from "react";
import { selectPlayerClass, setPlayerClass } from "../class/playerClassSelectorSlice";
import { setExpansion } from "./expansionSelectorSlice";

type Props = { expansion: Expansion };

export const ExpansionSelectionButton = ({ expansion }: Props) => {
    const dispatch = useAppDispatch();
    const selectedPlayerClass = useAppSelector(selectPlayerClass);

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

    return <button onClick={() => handleSetExpansionOnClick(expansion)}>{expansion}</button>;
};

export const ExpansionSelectionButtonMemoized = React.memo(ExpansionSelectionButton);
