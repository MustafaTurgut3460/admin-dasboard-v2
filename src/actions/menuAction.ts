import { ActionType } from "./themeAction";

export enum MenuActions {
    COLLAPSED = "COLLAPSED",
    DRAWER= "DRAWER"
}

export const showDrawer = (drawer: boolean): ActionType => {
    return {
        type: MenuActions.DRAWER,
        payload: drawer
    }
}

export const setCollapsed = (collapsed: boolean): ActionType => {
    return {
        type: MenuActions.COLLAPSED,
        payload: collapsed
    }
}