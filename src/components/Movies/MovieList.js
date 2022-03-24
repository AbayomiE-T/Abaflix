import React from 'react'
import styles from './MovieList.module.css'

import Movie from './Movie'

const MovieList = (props) => {

    const movies = props.movies;

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
            <h1 className={styles.banner}>{props.text}</h1>

            <div className={styles['movie-list-content']}>
                {!!showMovies.length && showMovies}
            </div>
            {!!showMovies.length || <p className={styles['empty-list']}>Looks like this list is empty! :(</p>}
        </section>
    )
}

export default MovieList;