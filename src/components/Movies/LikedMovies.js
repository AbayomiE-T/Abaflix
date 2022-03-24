import React from 'react'

import MovieList from './MovieList';

import { useSelector } from 'react-redux';

const LikedMovies = () => {

    const likedMovies = useSelector((state) => state.movies.likedMovies);

    return (
        <>
            {!!likedMovies && <MovieList movies={likedMovies} text="Here are your favourite movies"></MovieList>}
        </>
    )
}

export default LikedMovies;