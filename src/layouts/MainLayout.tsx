import { Header } from "@src/components/Header/Header";
import React from "react";

type Props = { children?: React.ReactNode };

export const MainLayout = (props: Props) => {
    return (
        <>
            <Header />
            {props.children}
        </>
    );
};
