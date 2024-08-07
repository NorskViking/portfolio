import { createSlice } from "@reduxjs/toolkit";
import { create } from "domain";

export interface themeState {
    theme: "light" | "dark";
}

const initialState: themeState = { 
    theme: "light", // Default theme 
}

const themeSlice = createSlice({
    name: "themeMode",
    initialState: initialState,
    reducers: {
        toggleTheme(state) {
            state.theme = state.theme === "light" ? "dark" : "light";
        }
    }
})

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;