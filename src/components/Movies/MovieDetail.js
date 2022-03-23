import React from 'react'

import { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findMovie } from '../../store/actions/movie-actions';

const MovieDetail = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const selectedMovie = useSelector((state) => state.movies.selectedMovie);

    useEffect(() => {
        dispatch(findMovie(+id));
    }, [dispatch, id])

    return (
        <div>MovieDetail</div>
    )
}

export default MovieDetail