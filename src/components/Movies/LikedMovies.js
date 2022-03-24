import React, { useEffect } from 'react'

import MovieList from './MovieList';

import { useDispatch, useSelector } from 'react-redux';
import { showNavigateToHome } from '../../store/actions/header-ui-actions';

const LikedMovies = () => {

    const dispatch = useDispatch()

    const likedMovies = useSelector((state) => state.movies.likedMovies);

    useEffect(() => {
        dispatch(showNavigateToHome());
    }, [])

    return (
        <>
            {!!likedMovies && <MovieList movies={likedMovies} text="Here are your favourite movies"></MovieList>}
        </>
    )
}

export default LikedMovies;