import { createSlice } from "@reduxjs/toolkit";

const headerUiSlice = createSlice({
    name: 'headerUI',

    initialState: {
        isHomePageActive: true
    },

    reducers: {
        showNavigateToHome(state) {
            state.isHomePageActive = false;
        },

        showNavigateToFavourites(state) {
            state.isHomePageActive = true;
        }
    }
})

export const headerUiActions = headerUiSlice.actions;

export default headerUiSlice;