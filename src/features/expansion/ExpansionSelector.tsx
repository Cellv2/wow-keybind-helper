import { useAppSelector } from "@src/app/hooks";
import { SupportedExpansions } from "@src/data/game/expansions";
import React from "react";
import { ExpansionSelectionButtonMemoized } from "./ExpansionSelectionButton";
import { selectExpansion } from "./expansionSelectorSlice";

export const ExpansionSelector = () => {
    const selectedExpansion = useAppSelector(selectExpansion);

    const availableExpansions = SupportedExpansions.map((expansion) => (
        <ExpansionSelectionButtonMemoized key={expansion} expansion={expansion} />
    ));

    return (
        <>
            {availableExpansions}
            <br />
            <p>Selelected expansion is: {selectedExpansion}</p>
        </>
    );
};
