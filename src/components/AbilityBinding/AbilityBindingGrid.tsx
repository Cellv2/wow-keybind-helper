import { useAppSelector } from "@src/app/hooks";
import { selectPlayerClass } from "@src/features/class/playerClassSelectorSlice";
import { PlayerClassService } from "@src/services/class/player-class.service";
import { WotlkGadgetService } from "@src/services/gadgets/wotlk-gadget.service";
import React from "react";
import { AbilityBindingGridSection } from "./AbilityBindingGridSection";

export const AbilityBindingGrid = () => {
    const selectedPlayerClass = useAppSelector(selectPlayerClass);
    const playerClassService = new PlayerClassService();

    const wotlkGadgetsService = new WotlkGadgetService();
    const wotlkGadgetNames = wotlkGadgetsService.getAllGadgetNames();

    const abilityGridSectionData: AbilityBindingGridSection[] = [
        {
            abilityNames: playerClassService.getClassAbilities(selectedPlayerClass),
            sectionName: "Class Abilities"
        },
        {
            abilityNames: wotlkGadgetNames,
            sectionName: "Engineering Gadgets"
        }
    ];

    const gridSections = abilityGridSectionData.map((sectionData) => (
        <AbilityBindingGridSection
            key={sectionData.sectionName}
            abilityNames={sectionData.abilityNames}
            sectionName={sectionData.sectionName}
        />
    ));

    return <>{gridSections}</>;
};
