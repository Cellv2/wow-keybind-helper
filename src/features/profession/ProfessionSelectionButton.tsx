import React from "react";

type Props = {
    professionName: string;
    selections: string[];
    handleOnClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const ProfessionSelectionButton = ({ professionName, selections, handleOnClick }: Props) => {
    return (
        <>
            <button
                className={`last:odd:col-span-2 ring-1 ring-inset`}
                onClick={(e) => handleOnClick(e)}
                value={professionName}
            >
                {professionName} - {selections.includes(professionName) ? "✅" : "❌"}
            </button>
        </>
    );
};

export const ProfessionSelectionButtonMemoized = React.memo(ProfessionSelectionButton);
