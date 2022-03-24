import React from 'react'

import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const Movies = () => {

    const movies = useSelector((state) => state.movies.movies);

    return (
        <>
            {!!movies && <MovieList movies={movies} text="Let's go to the movies!"></MovieList>}
        </>
    )
}

export default Movies