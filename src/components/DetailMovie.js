import React from 'react';
import css from './DetailMovie.module.css';
import details from '../details.json';

export const DetailMovie = () => {
    const srcImg = 'https://image.tmdb.org/t/p/w300';
    return (
        <div className={css.details}>
            <img src={srcImg + details.poster_path} alt='img' />
            <div className={css.info}>
                <h4>Title: {details.title}</h4>
                <p>Sinopsis: {details.overview}</p>
                <p>Genres: {details.genres.map((gen) => gen.name + ' - ')}</p>
            </div>
        </div>
    )
}
