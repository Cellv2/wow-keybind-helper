import React from "react";
import { AbilityBindingKey } from "./AbilityBindingKey";

type Props = { abilityName: string };

export const AbilityBindingRow = (props: Props) => {
    return (
        // <div className="grid gap-4 grid-flow-col auto-cols-max">
        <div className="grid gap-4 grid-cols-7 text-center">
            <div className="">ICON</div>
            <div className="col-span-3">{props.abilityName}</div>
            <AbilityBindingKey className="col-span-3" />
        </div>
    );
};
