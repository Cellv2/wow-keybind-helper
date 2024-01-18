import React from "react";

type SelectionGridProps = {
    gridItems: string[];
};

export const SelectionGrid = (props: SelectionGridProps) => {
    const elements = props.gridItems.map((item) => {
        return (
            <div key={item} className="flex-auto grow">
                <p>I am an image</p>
                <p>{item}</p>
            </div>
        );
    });

    return <div className="flex">{elements}</div>;
};
