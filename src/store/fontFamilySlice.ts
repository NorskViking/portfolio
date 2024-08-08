import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FontFamilyState {
    fontFamily: string;
}

const initialState: FontFamilyState = {
    fontFamily: localStorage.getItem('fontFamily') || "Open Sans",
};

const fontFamilySlice = createSlice({
    name: "fontFamily",
    initialState,
    reducers: {
        toggleFontFamily(state, action: PayloadAction<string>) {
            state.fontFamily = action.payload;
            localStorage.setItem("fontFamily", action.payload);
        }
    }
});

export const { toggleFontFamily } = fontFamilySlice.actions;
export default fontFamilySlice.reducer;