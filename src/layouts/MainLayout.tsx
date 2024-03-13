import { Header } from "@src/components/shared/Header";
import React from "react";
import { Outlet } from "react-router-dom";

type Props = { children?: React.ReactNode };

export const MainLayout = (props: Props) => {
    return (
        <main className="dark:bg-blue-950 dark:text-white min-h-dvh">
            <Header />
            <Outlet />
        </main>
    );
};
