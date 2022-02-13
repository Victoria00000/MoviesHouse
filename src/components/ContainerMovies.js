import React from 'react';
import { CardMovies } from './CardMovies';
import css from './ContainerMovies.module.css';

export const ContainerMovies = () => {
    return (
        <ul className={css.ContainerMovies}>
            <CardMovies />
        </ul>
    )
};