import React from "react";
import { AbilityBindingRow } from "./AbilityBindingRow";

type Props = {
    abilityNames: string[];
};

export const AbilityBindingGrid = (props: Props) => {
    const rowElements = props.abilityNames.map((ability) => (
        <AbilityBindingRow key={ability} abilityName={ability} />
    ));

    return (
        <>
            <div className="grid grid-cols-1 gap-4">{rowElements}</div>
        </>
    );
};
