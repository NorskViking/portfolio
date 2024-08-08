import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FontSizeState {
    fontSize: string;
};

const initialState: FontSizeState = {
    fontSize: localStorage.getItem("fontSize") || "medium",
};

const fontSizeSlice = createSlice({
    name: "fontSize",
    initialState,
    reducers: {
        toggleFontSize: (state, action: PayloadAction<string>) => {
            state.fontSize = action.payload;
            localStorage.setItem("fontSize", action.payload)
        }
    }
});

export const { toggleFontSize } = fontSizeSlice.actions;
export default fontSizeSlice.reducer;
