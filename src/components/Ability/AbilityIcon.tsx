import React from "react";

import exampleUrl from "@src/images/abilities/example.svg";

type Props = { name: string; iconPath: string };

const AbilityIcon = (props: Props) => {
    return (
        <>
            <div>{props.name}</div>
            <div>{props.iconPath}</div>

            <img src={exampleUrl} alt="example" />
        </>
    );
};

export const AbilityIconMemoized = React.memo(AbilityIcon);
