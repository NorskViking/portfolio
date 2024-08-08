import { combineReducers } from "@reduxjs/toolkit";
import modeReducer from "../theme/modeSlice";

const rootReducer = combineReducers({
    mode: modeReducer
})

export default rootReducer;