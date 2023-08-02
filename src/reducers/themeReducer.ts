import { ThemeState, Themes, ActionType, ThemeActionTypes } from "../actions/themeAction";

const initialState: ThemeState = {
    theme: Themes.Light
}

const themeReducer = (state=initialState, action: ActionType): ThemeState => {
    switch(action.type){
        case ThemeActionTypes.SET_THEME:
            return{
                ...state,
                theme: action.payload
            }
        default:
            return state
    }
}

export default themeReducer;