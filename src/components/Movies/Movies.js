import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { showNavigateToFavourites } from '../../store/actions/header-ui-actions';
import MovieList from './MovieList';

const Movies = () => {

    const dispatch = useDispatch();

    const movies = useSelector((state) => state.movies.movies);

    useEffect(() => {
        dispatch(showNavigateToFavourites())
    }, [])

    return (
        <>
            {!!movies && <MovieList movies={movies} text="Let's go to the movies!"></MovieList>}
        </>
    )
}

export default Movies