import React from "react";

type Props = { name: string; iconPath: string };

const AbilityIcon = (props: Props) => {
    return (
        <>
            <div>{props.name}</div>
            <div>{props.iconPath}</div>
        </>
    );
};

export const AbilityIconMemoized = React.memo(AbilityIcon);
