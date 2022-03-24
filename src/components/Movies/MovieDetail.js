import React from 'react'
import styles from './MovieDetail.module.css'

import { useEffect } from 'react';

import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToLikes, findMovie, removeFromLikedMovies } from '../../store/actions/movie-actions';

const baseUrl = 'https://image.tmdb.org/t/p/original';

const MovieDetail = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const selectedMovie = useSelector((state) => state.movies.selectedMovie);
    const likedMovies = useSelector((state) => state.movies.likedMovies)

    const isLiked = () => {
        return likedMovies.find((movie) => movie.id === selectedMovie.id);
    }

    const likeToggleHandler = () => {

        if (!isLiked()) {
            dispatch(addToLikes(selectedMovie));
        }

        else {
            dispatch(removeFromLikedMovies(selectedMovie.id));
        }

    }

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
                        <button
                            type="button"
                            className={`${styles.button} ${isLiked() ? styles.liked : ''}`}
                            onClick={likeToggleHandler}
                        >Like <i className={`${styles.icon} fa fa-thumbs-up`}></i></button>
                        <button
                            className={`${styles.button}`}
                            type="button"
                            onClick={() => history.go(-1)}>Go back <i className={`fa fa-angle-left ${styles.icon}`}></i></button>
                    </section>
                </div>}
        </>
    )
}

export default MovieDetail