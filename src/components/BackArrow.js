import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import css from './BackArrow.module.css';

export const BackArrow = () => {
    const back = () => window.scrollTo({top:0, behavior:'smooth'});

    return (
        <>
            <BsFillArrowUpSquareFill size={30} className={css.backButton} onClick={back} />
        </>
    );
};
