import { EXPANSION } from "@src/constants/game/expansion.consts";
import { PlayerClassSelector } from "@src/features/class/PlayerClassSelector";
import { ExpansionSelector } from "@src/features/expansion/ExpansionSelector";
import React from "react";
import { AbilityIconMemoized } from "../Ability/AbilityIcon";
import { SelectionGrid } from "../Selections/SelectionGrid";
import { TalentSelectorGrid } from "../talents/TalentSelectorGrid";
import styles from "./HelloWorld.module.scss";

export type HelloWorldProps = {
    title: string;
};

const HelloWorld = ({ title }: HelloWorldProps) => (
    <>
        <h1 className="text-3xl font-bold underline">{title}</h1>

        <hr />

        <h3>Environmental variables:</h3>
        <p className={styles.red}>
            process.env.PRODUCTION: <b>{process.env.PRODUCTION?.toString()}</b>
        </p>
        <p>
            process.env.NAME: <b>{process.env.NAME}</b>
        </p>
        <p>
            process.env.VERSION: <b>{process.env.VERSION}</b>
        </p>

        <TalentSelectorGrid />

        <SelectionGrid gridItems={[EXPANSION.CLASSIC, EXPANSION.DRAGONFLIGHT, EXPANSION.WOTLK]} />

        <ExpansionSelector />

        <PlayerClassSelector />

        <AbilityIconMemoized name="test" iconPath="path" />
    </>
);

export default HelloWorld;
