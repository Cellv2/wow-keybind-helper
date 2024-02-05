import React from "react";

type Props = {
    className?: string;
};

export const AbilityBindingKey = (props: Props) => {
    const bind = "Shift Q";
    return <div className={props.className ?? ""}>{bind}</div>;
};
