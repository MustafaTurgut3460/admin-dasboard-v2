import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./themeReducer";
import pageReducer from "./pageReducer";

const rootReducer = combineReducers({
    theme: themeReducer,
    page: pageReducer
})

export default rootReducer;