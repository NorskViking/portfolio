import { configureStore } from '@reduxjs/toolkit';
import themeReducer from "../features/theme/themeSlice";
import fontSizeReducer from "../features/fontSize/fontSizeSlice"
// import reducers

export const store = configureStore({
    reducer: {
        mode: themeReducer,
        // fontFamily: fontFamilyReducer
        fontSize: fontSizeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

/**
 export type AppStore = typeof store
 export type RootState = ReturnType<AppStore['getState']>
 
 export type AppDispatch = AppStore['dispatch']
 
 export type AppThunk<ThunkReturnType = void> = ThunkAction<
     ThunkReturnType,
     RootState,
     unknown,
     Action
 >

*/