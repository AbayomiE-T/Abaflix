import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from './slices/movie-feed-slice.js';
import headerUiSlice from "./slices/header-ui-slice.js";

const store = configureStore({
    reducer: {
        movies: moviesSlice.reducer,
        headerUi: headerUiSlice.reducer
    }
})

export default store;