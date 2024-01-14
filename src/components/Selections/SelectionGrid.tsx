import React from "react";

type SelectionGridProps = {
    gridItems: string[];
};

export const SelectionGrid = (props: SelectionGridProps) => {
    const elements = props.gridItems.map((item) => {
        return (
            <>
                <p>I am an image</p>
                <p key={item}>{item}</p>
            </>
        );
    });

    return <>{elements}</>;
};
