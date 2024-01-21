import { configureStore } from "@reduxjs/toolkit";
import expansionSelectorReducer from "../features/expansion/expansionSelectorSlice";

export const store = configureStore({
    reducer: {
        expansionSelector: expansionSelectorReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
