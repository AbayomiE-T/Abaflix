import { moviesActions } from "../slices/movie-feed-slice";

const baseUrl = "https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17";

export const getMovies = () => {
    return async (dispatch) => {
        const fetchMovies = async () => {

            const response = await fetch(baseUrl);

            if (!response.ok) {
                throw new Error('Could not fetch movies :(')
            }

            const data = await response.json();

            return data;
        }

        try {
            const movies = await fetchMovies();

            dispatch(moviesActions.getMovies(movies));
        }
        catch (error) {
            console.log(error.message);
        }
    }
}