import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
    isDarkMode: boolean;
}

const initialState: ThemeState = {
    isDarkMode: false,
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
        setTheme: (state, action) => {
            state.isDarkMode = action.payload;
        }
    }
});

/*
const initialState: ThemeState = { 
    theme: (localStorage.getItem("theme") as "light" | "dark") || "light",  
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme(state) {
            const newTheme = state.theme === "light" ? "dark" : "light";
            state.theme = newTheme;
            localStorage.setItem("theme", newTheme);
        }
    }
});
*/

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;