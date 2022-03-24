import React from 'react'
import { Link } from 'react-router-dom';

import style from './Movie.module.css';

const baseUrl = 'https://image.tmdb.org/t/p/w300';

const Movie = (props) => {
    return (
        <Link to={`/detail/${props.id}`} className={`${props.className}`}>
            <img className={style.grow} src={`${baseUrl}${props.src}`} alt={props.title} />
        </Link>
    )
}

export default Movie