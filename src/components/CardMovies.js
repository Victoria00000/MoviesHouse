import React from 'react';
import data from '../data.json';
import css from './CardMovies.module.css';

export const CardMovies = () => {
    const srcImg = 'https://image.tmdb.org/t/p/w300';
    return (
        data.map((obj) => {
            return (
                <li key={obj.id} className={css.card_movies}>
                    <img src={srcImg + obj.poster_path} alt={'img' + obj.title} title={obj.title} width={245}/>
                    <h5>{obj.title}</h5>
                </li>)
        })
    )
}