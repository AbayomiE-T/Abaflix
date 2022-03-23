import React from 'react'
import styles from './MovieList.module.css'

import Movie from './Movie'

import { useSelector } from 'react-redux'

const MovieList = () => {

    const movies = useSelector((state) => state.movies.movies);

    const showMovies = movies.map((movie) => {
        return <Movie
            key={movie.id}
            id={movie.id}
            className={styles['movie-wrapper']}
            src={movie.poster_path}
            title={movie.title}
        >
        </Movie>
    })

    return (
        <section>
            <h1 className={styles.banner}>Let's go to the movies!</h1>

            <div className={styles['movie-list-content']}>
                {movies.length && showMovies}
            </div>
        </section>
    )
}

export default MovieList;