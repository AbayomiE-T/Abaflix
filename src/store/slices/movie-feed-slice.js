import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: localStorage.getItem('movies') ?
            JSON.parse(localStorage.getItem('movies')) : [],
        likedMovies: [],
        selectedMovie: localStorage.getItem('selectedMovie') ?
            JSON.parse(localStorage.getItem('selectedMovie')) : null
    },

    reducers: {
        getMovies(state, action) {
            const movies = action.payload;

            state.movies = movies.results;

            cacheMovieRequest(state.movies);
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

            cacheSelectedMovie(state.selectedMovie);
        }

    }
})

const cacheSelectedMovie = (movie) => {
    localStorage.setItem('selectedMovie', JSON.stringify(movie));
}

const cacheMovieRequest = (movies) => {
    localStorage.setItem('movies', JSON.stringify(movies));
}

export const moviesActions = moviesSlice.actions;

export default moviesSlice;