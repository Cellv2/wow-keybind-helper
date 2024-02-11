import { PlayerClassSelector } from "@src/features/class/PlayerClassSelector";
import { ExpansionSelector } from "@src/features/expansion/ExpansionSelector";
import React from "react";

type Props = { className?: string };

export const SideBar = (props: Props = { className: "" }) => {
    return (
        <div className={`${props.className} grid grid-flow-row`}>
            <p>SideBar</p>
            <ExpansionSelector />
            <PlayerClassSelector />
        </div>
    );
};
