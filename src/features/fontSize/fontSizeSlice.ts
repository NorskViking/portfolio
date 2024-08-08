import { createSlice } from "@reduxjs/toolkit";

type FontSizeState = {
    size: "small" | "medium" | "large" | "xl" | "xxl";
};

const initialState: FontSizeState = {
    size: "medium",
};

const fontSizeSlice = createSlice({
    name: "fontSize",
    initialState,
    reducers: {
        setFontSize: (state, action) => {
            state.size = action.payload;
        }
    }
})

export const { setFontSize } = fontSizeSlice.actions;
export default fontSizeSlice.reducer;
