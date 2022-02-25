import { Link } from 'react-router-dom';
import css from './CardMovies.module.css';
import imgPlaceholder from '../imgPlaceholder.png';

export const CardMovies = ({ obj }) => {
    const srcImg = obj.poster_path ? 'https://image.tmdb.org/t/p/w300' + obj.poster_path : imgPlaceholder;
    return (
        <li className={css.card_movies}>
            <Link to={'/detail/' + obj.id}>
                <img src={srcImg} alt={'img' + obj.title} title={obj.title} width={245} />
                <h5>{obj.title}</h5>
            </Link>
        </li>
    )
}