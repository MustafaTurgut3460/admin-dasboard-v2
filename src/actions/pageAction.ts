import { ActionType } from "./themeAction"

export interface PageState{
    path: string
}

export enum PageActions{
    SET_PAGE = "SET_PAGE"
}

export const setPage = (page: PageState): ActionType => {
    return {
        type: PageActions.SET_PAGE,
        payload: page
    }
}