import React from "react";
import { AbilityBindingRow } from "./AbilityBindingRow";

export type AbilityBindingGridSection = {
    sectionName: string;
    abilityNames: string[];
};

export const AbilityBindingGridSection = (props: AbilityBindingGridSection) => {
    const rowElements = props.abilityNames.map((ability) => (
        <AbilityBindingRow key={ability} abilityName={ability} />
    ));

    return (
        <>
            <div className="grid grid-cols-1 gap-4">
                <div className="p-2 border-b text-center text-lg/8">{props.sectionName}</div>
                {rowElements}
            </div>
        </>
    );
};
