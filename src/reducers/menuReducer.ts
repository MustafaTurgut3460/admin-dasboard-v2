import { MenuActions } from "../actions/menuAction";
import { ActionType } from "../actions/themeAction";

const initialState = {
  drawer: false,
  collapsed: false
};

export interface MenuState{
  drawer: boolean,
  collapsed: boolean
}

const menuReducer = (state = initialState, action: ActionType): MenuState => {
  switch (action.type) {
    case MenuActions.COLLAPSED:
      return {
        ...state,
        collapsed: action.payload
      };
    case MenuActions.DRAWER:
      return {
        ...state,
        drawer: action.payload
      };
    default:
      return state;
  }
};

export default menuReducer;
