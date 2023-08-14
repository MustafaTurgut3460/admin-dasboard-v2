import { ActionType } from "./themeAction";

export enum MenuActions {
    COLLAPSED = "COLLAPSED"
}

export const setCollapsed = (collapsed: boolean): ActionType => {
    return {
        type: MenuActions.COLLAPSED,
        payload: collapsed
    }
}