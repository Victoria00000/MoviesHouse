import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import css from './ContainerMovies.module.css';
import { CardMovies } from './CardMovies';
import { Fetch } from './Fetch';
import { LoadingDesing } from './LoadingDesing';

function useQuery() { return new URLSearchParams(useLocation().search) };

export const ContainerMovies = () => {
    const [data, setData] = useState([]);
    const [Loading, setLoading] = useState(true);

    const query = useQuery();
    const search = query.get('search');

    useEffect(() => {
        setLoading(true);
        const searchURL = search ? '/search/movie?api_key=TUAPIKEY&query=' + search : '/discover/movie';
        Fetch(searchURL).then(rtas => {
            setLoading(false);
            return (setData(rtas.results));
        });
    }, [search]);

    if (Loading) { return <LoadingDesing />; };

    return (
        <ul className={css.ContainerMovies}>
            {data.map((obj) => {
                return (<CardMovies key={obj.id} obj={obj} />)
            })}
        </ul>
    )
};

