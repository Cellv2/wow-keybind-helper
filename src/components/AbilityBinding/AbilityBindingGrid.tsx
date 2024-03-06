import { WotlkGadgetService } from "@src/services/gadgets/wotlk-gadget.service";
import React from "react";
import { AbilityBindingGridSection } from "./AbilityBindingGridSection";

export const AbilityBindingGrid = () => {
    const wotlkGadgetsService = new WotlkGadgetService();
    const wotlkGadgetNames = wotlkGadgetsService.getAllGadgetNames();

    const abilityGridSectionData: AbilityBindingGridSection[] = [
        {
            abilityNames: ["Shiv", "Backstab"],
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
