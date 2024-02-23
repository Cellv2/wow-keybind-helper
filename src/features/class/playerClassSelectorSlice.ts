import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@src/app/store";
import { PLAYER_CLASS, PlayerClass } from "@src/data/player/class/classes";

export interface PlayerClassSelectionState {
    playerClass: PlayerClass;
}

const initialState: PlayerClassSelectionState = {
    playerClass: PLAYER_CLASS.DRUID
} as PlayerClassSelectionState;

export const playerClassSelectorSlice = createSlice({
    name: "playerClassSelection",
    initialState,
    reducers: {
        setPlayerClass: (state, action: PayloadAction<PlayerClass>) => {
            state.playerClass = action.payload;
        }
    }
});

export const { setPlayerClass } = playerClassSelectorSlice.actions;

export const selectPlayerClass = (state: RootState) => state.playerClassSelector.playerClass;

export default playerClassSelectorSlice.reducer;
