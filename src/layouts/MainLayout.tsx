import { Header } from "@src/components/Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

type Props = { children?: React.ReactNode };

export const MainLayout = (props: Props) => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};
