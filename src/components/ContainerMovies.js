import { useEffect, useState } from 'react';
import css from './ContainerMovies.module.css';
import { CardMovies } from './CardMovies';
import { Fetch } from './Fetch';
import { LoadingDesing } from './LoadingDesing';

export const ContainerMovies = () => {
    const [data, setData] = useState([]);
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        Fetch('/discover/movie').then(rtas => setData(rtas.results));
        setLoading(false);
    }, []);

    if (Loading) { return <LoadingDesing/>; };

    return (
        <ul className={css.ContainerMovies}>
            {data.map((obj) => {
                return (<CardMovies key={obj.id} obj={obj} />)
            })}
        </ul>
    )
};

