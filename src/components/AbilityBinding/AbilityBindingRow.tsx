import React from "react";
import { AbilityBindingKey } from "./AbilityBindingKey";

type Props = { abilityName: string };

export const AbilityBindingRow = (props: Props) => {
    return (
        <div className="flex">
            <div className="flex-initial w-20">ICON</div>
            <div className="flex-initial w-40">{props.abilityName}</div>
            <AbilityBindingKey className="flex-initial w-40" />
        </div>
    );
};
