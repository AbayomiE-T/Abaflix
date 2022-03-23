import React from 'react'
import styles from './MovieDetail.module.css'

import { useEffect } from 'react';

import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findMovie } from '../../store/actions/movie-actions';

const baseUrl = 'https://image.tmdb.org/t/p/original';

const MovieDetail = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const selectedMovie = useSelector((state) => state.movies.selectedMovie);

    useEffect(() => {
        dispatch(findMovie(+id));
    }, [dispatch, id])

    return (
        <>
            {!!selectedMovie && <img className={styles['backdrop-poster']} src={`${baseUrl}/${selectedMovie.backdrop_path}`} alt={selectedMovie.title}></img>}

            {!!selectedMovie &&

                <div className={styles["cover-image"]}>
                    <section className={styles["movie-detail"]}>
                        <h1 className={styles["movie-title"]}>{selectedMovie.title}</h1>
                        <p className={styles.blurb}>{selectedMovie.overview}</p>
                        <button type="button" className={styles['like-button']}>Like</button>
                        <button type="button" onClick={() => history.go(-1)}>Go back</button>
                    </section>
                </div>}
        </>
    )
}

export default MovieDetail