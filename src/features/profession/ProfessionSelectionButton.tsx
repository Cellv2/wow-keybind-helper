import React from "react";

type Props = {
    professionName: string;
    selections: string[];
    handleOnClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const ProfessionSelectionButton = ({ professionName, selections, handleOnClick }: Props) => {
    return (
        <>
            <button onClick={(e) => handleOnClick(e)} value={professionName}>
                {professionName} - {selections.includes(professionName) ? "✅" : "❌"}
            </button>
            <br />
        </>
    );
};

export const ProfessionSelectionButtonMemoized = React.memo(ProfessionSelectionButton);
