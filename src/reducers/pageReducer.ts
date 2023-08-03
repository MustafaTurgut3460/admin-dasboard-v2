import { PageActions, PageState } from "../actions/pageAction";
import { ActionType } from "../actions/themeAction";

const initialState: PageState = {
    path: "Dashboard"
}

const pageReducer = (state = initialState, action: ActionType): PageState => {
    switch(action.type){
        case PageActions.SET_PAGE:
            return {
                ...state,
                path: action.payload.path
            }
        default:
            return state
    }
}

export default pageReducer;