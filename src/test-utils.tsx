// https://redux.js.org/usage/writing-tests#setting-up-a-reusable-test-render-function

import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { setupStore, type AppStore, type RootState } from "@src/app/store";
// As a basic setup, import your same slice reducers
// import userReducer from "../features/users/userSlice";
import playerClassSelectorReducer from "@src/features/class/playerClassSelectorSlice";
import expansionSelectorReducer from "@src/features/expansion/expansionSelectorSlice";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
    preloadedState?: Partial<RootState>;
    store?: AppStore;
}

export function renderWithProviders(
    ui: React.ReactElement,
    {
        preloadedState = {},
        // Automatically create a store instance if no store was passed in
        // store = configureStore({
        //     reducer: {
        //         expansionSelector: expansionSelectorReducer,
        //         playerClassSelector: playerClassSelectorReducer
        //     },
        //     // preloadedState
        // }),
        store = setupStore(preloadedState),

        ...renderOptions
    }: ExtendedRenderOptions = {}
) {
    function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
        return <Provider store={store}>{children}</Provider>;
    }

    // Return an object with the store and all of RTL's query functions
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
