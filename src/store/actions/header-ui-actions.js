import { headerUiActions } from "../slices/header-ui-slice";

export const showNavigateToHome = () => {
    return (dispatch) => {
        dispatch(headerUiActions.showNavigateToHome());
    }
}

export const showNavigateToFavourites = () => {
    return (dispatch) => {
        dispatch(headerUiActions.showNavigateToFavourites());
    }
}