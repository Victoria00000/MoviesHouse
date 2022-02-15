import React from 'react';
import { useEffect, useState } from 'react';
import css from './ContainerMovies.module.css';
import { CardMovies } from './CardMovies';


export const ContainerMovies = () => {
    
    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/discover/movie', {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjJlN2Q0ODgxZWZhODE4Y2RmOGY3M2E3MGMwNmZhOCIsInN1YiI6IjYyMGFhNzhkYTMxM2I4MDBiNWNmYjc0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8szRIxcTL_b77Cn976wq3O2rfP89TCOlfkPAL3x6SYc",
                "Content-Type": "application/json;charset=utf-8",
            },
        }).then(rta => {rta.json(); console.log(rta);})
            .then(rtas => setdata(rtas.results));
    }, []);

    return (
        <ul className={css.ContainerMovies}>
            {data.map((obj) => {
                return (<CardMovies key={obj.id} obj={obj} />)
            })}
        </ul>
    )
};

