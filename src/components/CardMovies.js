import React from 'react';
import { Link } from 'react-router-dom';
import css from './CardMovies.module.css';

export const CardMovies = ({ obj }) => {
    const srcImg = 'https://image.tmdb.org/t/p/w300';
    return (
        <li className={css.card_movies}>
            <Link to={'/detail/' + obj.id}>
                <img src={srcImg + obj.poster_path} alt={'img' + obj.title} title={obj.title} width={245} />
                <h5>{obj.title}</h5>
            </Link>
        </li>
    )
}