import React from "react";
import HelloWorld from "./components/HelloWorld/HelloWorld";

import "./app.scss";
import { MainLayout } from "./layouts/MainLayout";

const App = () => (
    <MainLayout>
        <HelloWorld title="Bonjour!" />
    </MainLayout>
);

export default App;
