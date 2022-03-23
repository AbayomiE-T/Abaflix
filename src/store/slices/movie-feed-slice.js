import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        likedMovies: []
    },

    reducers: {
        getMovies(state, action) {
            const movies = action.payload;

            state.movies = movies.results;
        },

        addToLikedMovies(state, action) {
            const movie = action.payload;

            state.likedMovies.push(movie);
        }
    }
})

export const moviesActions = moviesSlice.actions;

export default moviesSlice;