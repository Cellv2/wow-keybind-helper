import { Header } from "@src/components/Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

type Props = { children?: React.ReactNode };

export const MainLayout = (props: Props) => {
    return (
        <main className="dark:bg-blue-950 dark:text-white">
            <Header />
            <Outlet />
        </main>
    );
};
