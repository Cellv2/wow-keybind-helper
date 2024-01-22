import { configureStore } from "@reduxjs/toolkit";
import playerClassSelectorReducer from "../features/class/playerClassSelectorSlice";
import expansionSelectorReducer from "../features/expansion/expansionSelectorSlice";

export const store = configureStore({
    reducer: {
        expansionSelector: expansionSelectorReducer,
        playerClassSelector: playerClassSelectorReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
