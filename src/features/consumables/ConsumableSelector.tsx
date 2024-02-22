import React from "react";
import { ConsumableSelectionButtonMemoized } from "./ConsumableSelectionButton";

export const ConsumableSelector = () => {
    const availableConsumables = ["Buff Food", "Potions", "Elixirs"];

    const elements = availableConsumables.map((consumable) => (
        <ConsumableSelectionButtonMemoized key={consumable} consumableName={consumable} />
    ));

    return <div>{elements}</div>;
};
