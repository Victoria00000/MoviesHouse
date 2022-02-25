import { RiFileWarningFill } from 'react-icons/ri';
import css from './NoResults.module.css';

export const NoResults = () => {
    return (
        <div className={css.divNoResulsts}>
            <RiFileWarningFill size={50} />
            <h2>0 Matches </h2>
        </div>
    );
};
