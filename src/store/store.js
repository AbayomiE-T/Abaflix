import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from './slices/movie-feed-slice.js';

const store = configureStore({
    reducer: { movies: moviesSlice.reducer }
})

export default store;