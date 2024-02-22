import React from "react";

type Props = { consumableName: string };

export const ConsumableSelectionButton = (props: Props) => {
    return <div>{props.consumableName}</div>;
};

export const ConsumableSelectionButtonMemoized = React.memo(ConsumableSelectionButton);
