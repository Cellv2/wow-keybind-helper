import React, { useState } from "react";
import { AbilitySequenceGame } from "./AbilitySequenceGame";
import { AbilityToBindGame } from "./AbilityToBindGame";
import { BindToAbilityGame } from "./BindToAbilityGame";

export const AbilityGames = () => {
    const [selectedGame, setSelectedGame] = useState<React.JSX.Element>(AbilitySequenceGame);
    return (
        <>
            <button onClick={() => setSelectedGame(AbilitySequenceGame)}>
                AbilitySequenceGame
            </button>
            <button onClick={() => setSelectedGame(AbilityToBindGame)}>AbilityToBindGame</button>
            <button onClick={() => setSelectedGame(BindToAbilityGame)}>BindToAbilityGame</button>
            <hr />
            {selectedGame}
        </>
    );
};
