import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import css from './ContainerMovies.module.css';
import { CardMovies } from './CardMovies';
import { Fetch } from './Fetch';
import { LoadingDesign } from './LoadingDesign';
import InfiniteScroll from 'react-infinite-scroll-component';
import { NoResults } from './NoResults';

function useQuery() { return new URLSearchParams(useLocation().search) };

export const ContainerMovies = () => {
    const [data, setData] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [Page, setPage] = useState(1);
    const [HasMore, setHasMore] = useState(true);

    const query = useQuery();
    const search = query.get('search');

    useEffect(() => {
        setLoading(true);
        const searchURL = search ? `/search/movie?api_key=TUAPIKEY&query= ${search} &page= ${Page}` : `/discover/movie?page= ${Page}`;
        Fetch(searchURL).then(rtas => {
            setLoading(false);
            setData(prevData => prevData.concat(rtas.results));
            if (rtas.page >= rtas.total_pages) { setHasMore(false) };
        });
    }, [search, Page]);

    const Next = () => setPage(prevPage => prevPage + 1);

    if (!Loading && data.length === 0) { return <NoResults />; };

    return (
        <InfiniteScroll dataLength={data.length} hasMore={HasMore} next={Next} loader={<LoadingDesign />} >
            <ul className={css.ContainerMovies}>
                {data.map((obj) => {
                    return (<CardMovies key={obj.id} obj={obj} />)
                })}
            </ul>
        </InfiniteScroll>
    )
};

