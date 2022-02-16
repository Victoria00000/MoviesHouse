import React from 'react';
import { useEffect, useState } from 'react';
import css from './ContainerMovies.module.css';
import { CardMovies } from './CardMovies';
import { Fetch } from './Fetch';

export const ContainerMovies = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        Fetch('/discover/movie').then(rtas => setData(rtas.results));
    }, []);

    return (
        <ul className={css.ContainerMovies}>
            {data.map((obj) => {
                return (<CardMovies key={obj.id} obj={obj} />)
            })}
        </ul>
    )
};

