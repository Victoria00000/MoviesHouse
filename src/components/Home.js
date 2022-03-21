import { ContainerMovies } from './ContainerMovies';
import { Search } from './Search.js';
import { useLocation } from 'react-router-dom';
import { BackArrow } from './BackArrow';

function useQuery() { return new URLSearchParams(useLocation().search) };

export const Home = () => {
    const query = useQuery();
    const search = query.get('search');
    
    return (
        <>
            <Search />
            <ContainerMovies key={search} />
            <BackArrow/>
        </>
    );
};
