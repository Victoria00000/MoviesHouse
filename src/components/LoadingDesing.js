import css from './LoadingDesing.module.css';
import { ImSpinner9 } from 'react-icons/im';

export const LoadingDesing = () => {
    return (
        <div className={css.loading}> <ImSpinner9 size={50} className={css.spinner} /> </div>
    )
};
