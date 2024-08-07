import { createSlice } from "@reduxjs/toolkit";

export const FONTFAMILIES = [
    "Concert One",
    "Comfortaa",
    "Roboto",
    "Open Sans",
    "Work Sans",
    "Quicksand",
    "Oxygen",
    "Merriweather Sans",
    "Kosugi",
    "Kosugi Maru",
    "Alef",
    "Barlow Semi Condensed",
];

const initialState = FONTFAMILIES.map((fontfamily) => ({
    fontfamily: fontfamily,
    value: "Open Sans",
}));