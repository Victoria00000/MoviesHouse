import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import css from './ContainerMovies.module.css';
import { CardMovies } from './CardMovies';
import { Fetch } from './Fetch';
import { LoadingDesing } from './LoadingDesing';
import InfiniteScroll from 'react-infinite-scroll-component';

function useQuery() { return new URLSearchParams(useLocation().search) };

export const ContainerMovies = () => {
    const [data, setData] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [Page, setPage] = useState(1);

    const query = useQuery();
    const search = query.get('search');

    useEffect(() => {
        setLoading(true);
        const searchURL = search ? '/search/movie?api_key=TUAPIKEY&query=' + search : '/discover/movie';
        Fetch(searchURL).then(rtas => {
            setLoading(false);
            return (setData(rtas.results));
        });
    }, [search, Page]);

    if (Loading) { return <LoadingDesing />; };

    const Next = () => setPage(prevPage => prevPage + 1);

    return (
        <InfiniteScroll dataLength={data.length} hasMore={true} next={Next} >
            <ul className={css.ContainerMovies}>
                {data.map((obj) => {
                    return (<CardMovies key={obj.id} obj={obj} />)
                })}
            </ul>
        </InfiniteScroll>
    )
};

