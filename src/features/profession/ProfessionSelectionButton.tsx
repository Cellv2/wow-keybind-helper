import React from "react";

type Props = { professionName: string };

export const ProfessionSelectionButton = (props: Props) => {
    return <div>{props.professionName}</div>;
};

export const ProfessionSelectionButtonMemoized = React.memo(ProfessionSelectionButton);
