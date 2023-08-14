import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./themeReducer";
import pageReducer from "./pageReducer";
import menuReducer from "./menuReducer";

const rootReducer = combineReducers({
    theme: themeReducer,
    page: pageReducer,
    menu: menuReducer
})

export default rootReducer;