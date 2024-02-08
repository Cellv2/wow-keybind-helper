import React from "react";
import { AbilityBindingRow } from "./AbilityBindingRow";

type Props = {
    sectionName: string;
    abilityNames: string[];
};

export const AbilityBindingGrid = (props: Props) => {
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
