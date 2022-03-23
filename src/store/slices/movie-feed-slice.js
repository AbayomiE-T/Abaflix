import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        likedMovies: [],
        selectedMovie: null
    },

    reducers: {
        getMovies(state, action) {
            const movies = action.payload;

            state.movies = movies.results;
        },

        addToLikedMovies(state, action) {
            const movie = action.payload;

            state.likedMovies.push(movie);
        },

        findMovie(state, action) {
            const id = action.payload

            const movie = state.movies.filter((movie) => {
                return movie.id === id;
            })[0];

            state.selectedMovie = movie;
        }

    }
})

export const moviesActions = moviesSlice.actions;

export default moviesSlice;