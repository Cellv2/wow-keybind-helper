import React from "react";
import { TalentSelectorGrid } from "../talents/TalentSelectorGrid";

export type HelloWorldProps = {
    title: string;
};

const HelloWorld = ({ title }: HelloWorldProps) => (
    <>
        <h1>{title}</h1>

        <hr />

        <h3>Environmental variables:</h3>
        <p>
            process.env.PRODUCTION: <b>{process.env.PRODUCTION?.toString()}</b>
        </p>
        <p>
            process.env.NAME: <b>{process.env.NAME}</b>
        </p>
        <p>
            process.env.VERSION: <b>{process.env.VERSION}</b>
        </p>

        <TalentSelectorGrid />
    </>
);

export default HelloWorld;
