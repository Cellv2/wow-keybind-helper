import React from "react";
import { TalentSelectorGrid } from "../talents/TalentSelectorGrid";
import { SelectionGrid } from "../Selections/SelectionGrid";
import { EXPANSION } from "src/constants/game/expansion.consts";

// @ts-expect-error awd
import styles from "./HelloWorld.module";

export type HelloWorldProps = {
    title: string;
};

const HelloWorld = ({ title }: HelloWorldProps) => (
    <>
        <h1>{title}</h1>

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
    </>
);

export default HelloWorld;
