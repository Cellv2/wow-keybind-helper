// https://redux.js.org/usage/writing-tests#example-app-code

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import playerClassSelectorReducer from "../features/class/playerClassSelectorSlice";
import expansionSelectorReducer from "../features/expansion/expansionSelectorSlice";

const rootReducer = combineReducers({
    expansionSelector: expansionSelectorReducer,
    playerClassSelector: playerClassSelectorReducer
});

export const store = configureStore({
    reducer: {
        expansionSelector: expansionSelectorReducer,
        playerClassSelector: playerClassSelectorReducer
    }
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    });
};

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
