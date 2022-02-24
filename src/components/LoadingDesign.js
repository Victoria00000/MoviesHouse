import css from './LoadingDesign.module.css';
import { ImSpinner9 } from 'react-icons/im';

export const LoadingDesign = () => {
    return (
        <div className={css.loading}> <ImSpinner9 size={50} className={css.spinner} /> </div>
    )
};
