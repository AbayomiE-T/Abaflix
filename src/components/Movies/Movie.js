import React from 'react'
import { Link } from 'react-router-dom';

const baseUrl = 'https://image.tmdb.org/t/p/w300';

const Movie = (props) => {
    return (
        <Link to='/detail' className={`${props.className}`}>
            <img className={StyleSheet.poster} src={`${baseUrl}${props.src}`} />
        </Link>
    )
}

export default Movie