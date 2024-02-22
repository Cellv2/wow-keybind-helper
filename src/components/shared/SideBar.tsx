import { PlayerClassSelector } from "@src/features/class/PlayerClassSelector";
import { ConsumableSelector } from "@src/features/consumables/ConsumableSelector";
import { ExpansionSelector } from "@src/features/expansion/ExpansionSelector";
import { ProfessionSelector } from "@src/features/profession/ProfessionSelector";
import React from "react";

type Props = { className?: string };

export const SideBar = (props: Props = { className: "" }) => {
    return (
        <div className={`${props.className} grid grid-flow-row m-2`}>
            <p>SideBar</p>
            <ExpansionSelector />
            <PlayerClassSelector />
            <ProfessionSelector />
            <ConsumableSelector />
        </div>
    );
};
