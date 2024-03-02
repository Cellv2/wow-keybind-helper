import { EXPANSION } from "@src/data/game/expansions";
import { PlayerClassSelector } from "@src/features/class/PlayerClassSelector";
import { ExpansionSelector } from "@src/features/expansion/ExpansionSelector";
import { WotlkGadgetService } from "@src/services/gadgets/wotlk-gadget.service";
import React from "react";
import { AbilityIconMemoized } from "../Ability/AbilityIcon";
import { AbilityBindingGrid } from "../AbilityBinding/AbilityBindingGrid";
import { KeypressInputAndDisplay } from "../Input/KeypressInputAndDisplay";
import { SelectionGrid } from "../Selections/SelectionGrid";
import { SideBar } from "../shared/SideBar";
import { TalentSelectorGrid } from "../talents/TalentSelectorGrid";
import styles from "./HelloWorld.module.scss";

export type HelloWorldProps = {
    title: string;
};

const HelloWorld = ({ title }: HelloWorldProps) => {
    const wotlkGadgetsService = new WotlkGadgetService();
    const wotlkGadgetNames = wotlkGadgetsService.getAllGadgetNames();

    return (
        <main className=" grid grid-cols-5">
            <SideBar className="col-span-1" />

            <div className="col-span-4">
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

                <SelectionGrid
                    gridItems={[EXPANSION.CLASSIC, EXPANSION.DRAGONFLIGHT, EXPANSION.WOTLK]}
                />

                <ExpansionSelector />

                <PlayerClassSelector />

                <AbilityIconMemoized name="test" iconPath="path" />

                <KeypressInputAndDisplay />

                <AbilityBindingGrid
                    sectionName="Class Abilities"
                    abilityNames={["Shiv", "Backstab"]}
                />

                <AbilityBindingGrid
                    sectionName="Engineering Gadgets"
                    abilityNames={wotlkGadgetNames}
                />
            </div>
        </main>
    );
};

export default HelloWorld;
