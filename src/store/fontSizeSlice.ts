import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Defining possible font size values
export type FontSize = "small" | "medium" | "large" | "x-large" | "xx-large" | "xxx-large"; 

interface FontSizeState {
    fontSize: FontSize;
};

const getFontSizeFromLocalStorage = (): FontSize => {
    const storedSize = localStorage.getItem("fontSize");
    // Ensure the value from localStorage is valid
    if (storedSize === "small" || 
        storedSize ==="medium" || 
        storedSize === "large" ||
        storedSize === "x-large" ||
        storedSize === "xx-large" ||
        storedSize === "xxx-large") {
        return storedSize;
    }
    return "medium"; // Default value
}

const initialState: FontSizeState = {
    fontSize: getFontSizeFromLocalStorage(),
};

const fontSizeSlice = createSlice({
    name: "fontSize",
    initialState,
    reducers: {
        toggleFontSize: (state, action: PayloadAction<FontSize>) => {
            state.fontSize = action.payload;
            localStorage.setItem("fontSize", action.payload)
        }
    }
});

export const { toggleFontSize } = fontSizeSlice.actions;
export default fontSizeSlice.reducer;
