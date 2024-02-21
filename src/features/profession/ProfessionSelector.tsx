import React from "react";
import { ProfessionSelectionButtonMemoized } from "./ProfessionSelectionButton";

export const ProfessionSelector = () => {
    const availableProcessions = [
        "Alchemy",
        "Blacksmithing",
        "Enchanting",
        "Engineering",
        "Inscription",
        "Jewelcrafting",
        "Leatherworking",
        "Tailoring",
        "Herbalism",
        "Mining",
        "Skinning",
        "Cooking",
        "Fishing",
        "Archaeology"
    ];

    const elements = availableProcessions.map((profession) => (
        <ProfessionSelectionButtonMemoized key={profession} professionName={profession} />
    ));

    return <div>{elements}</div>;
};
