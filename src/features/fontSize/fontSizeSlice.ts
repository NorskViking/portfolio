import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FontSizeState {
    value: number
    status: 'idle' | 'loading' | 'failed'
}

// Define the initial fontSize value for the slice state
const initialState: FontSizeState = {
    value: 18,
    status: 'idle'
}

// Redux slice for FontSize
export const fontSizeSlice = createSlice({
    name: 'fontSize',
    initialState,

    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = fontSizeSlice.actions

export default fontSizeSlice.reducer