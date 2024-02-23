import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@src/app/store";
import { Expansion } from "@src/data/game/expansions";

export interface ExpansionSelectionState {
    expansion: Expansion;
}

const initialState: ExpansionSelectionState = {
    expansion: "classic"
} as ExpansionSelectionState;

export const expansionSelectorSlice = createSlice({
    name: "expansionSelection",
    initialState,
    reducers: {
        setExpansion: (state, action: PayloadAction<Expansion>) => {
            state.expansion = action.payload;
        }
    }
});

export const { setExpansion } = expansionSelectorSlice.actions;

export const selectExpansion = (state: RootState) => state.expansionSelector.expansion;

export default expansionSelectorSlice.reducer;
