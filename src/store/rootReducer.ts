import { combineReducers } from "redux";

import fontFamilyReducer from "./fontFamilySlice";
import fontSizeReducer from "./fontSizeSlice";
import themeReducer from "./themeSlice";

const rootReducer = combineReducers({
    fontFamily: fontFamilyReducer,
    fontSize: fontSizeReducer,
    theme: themeReducer,
});

export type Rootstate = ReturnType<typeof rootReducer>;

export default rootReducer;