import { MenuActions } from "../actions/menuAction";
import { ActionType } from "../actions/themeAction";

const initialState = false;

const menuReducer = (state=initialState, action: ActionType): boolean => {
    switch (action.type){
        case MenuActions.COLLAPSED:
            return action.payload
        default:
            return state
    }
}

export default menuReducer