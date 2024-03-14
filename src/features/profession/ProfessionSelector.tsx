import React, { useState } from "react";
import { ProfessionSelectionButtonMemoized } from "./ProfessionSelectionButton";

export const ProfessionSelector = () => {
    const [selections, setSelections] = useState<string[]>([]);

    const availableProfessions = [
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

    const handleOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const value = event.currentTarget.value;
        console.log(event);

        if (selections.includes(value)) {
            const newSelections = selections.filter((selection) => selection !== value);
            setSelections(newSelections);

            return;
        }

        const newSelections = [...selections, value];
        if (newSelections.length > 2) {
            newSelections.shift();
        }

        setSelections(newSelections);
    };

    const elements = availableProfessions.map((profession) => (
        <ProfessionSelectionButtonMemoized
            key={profession}
            professionName={profession}
            selections={selections}
            handleOnClick={handleOnClick}
        />
    ));

    return <div className="grid grid-cols-2 gap-2">{elements}</div>;
};
