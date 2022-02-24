import { useEffect, useState } from 'react';
import css from './DetailMovie.module.css';
import { useParams } from 'react-router-dom';
import { Fetch } from './Fetch';
import { LoadingDesign } from './LoadingDesign';

export const DetailMovie = () => {
    const { detailId } = useParams(); console.log(detailId);
    const [Loading, setLoading] = useState(true);
    const [details, setDetails] = useState(null);
    useEffect(() => {
        setLoading(true);
        Fetch(`/movie/${detailId}`).then(rtas => {
            setLoading(false);
            console.log(rtas);
            return setDetails(rtas)
        });
    }, [detailId]);

    if (Loading) { return <LoadingDesign/>; };
    if (!details) { return null; };

    const srcImg = 'https://image.tmdb.org/t/p/w300';
    return (
        <div className={css.details_}>
            <img src={srcImg + details.poster_path} alt='img' />
            <div className={css.info}>
                <h4>Title: {details.title}</h4>
                <p>Sinopsis: {details.overview}</p>
                <p>Genres: {details.genres.map((gen) => gen.name).join(' - ')}</p>
            </div>
        </div>
    )
}
