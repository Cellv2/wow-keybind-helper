import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./app.scss";
import HelloWorld from "./components/HelloWorld/HelloWorld";
import { MainLayout } from "./layouts/MainLayout";
import { ErrorPage } from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HelloWorld title="Bonjour!" />
            },
            {
                path: "/something",
                element: <div>something</div>
            },
            {
                path: "/different",
                element: <div>different</div>
            }
        ]
    },
    {
        path: "/qwe",
        element: <div>what</div>
    }
]);

const App = () => <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;

// if (import.meta.hot) {
//     import.meta.hot.dispose(() => router.dispose());
// }

export default App;
