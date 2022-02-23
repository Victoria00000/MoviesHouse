import css from './Search.module.css';
import { useSearchParams } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';

export const Search = () => {

  const [query, setQuery] = useSearchParams();
  const search = query.get('search');

  const Submit = evt => evt.preventDefault();
  const setValue = evt => {
    const value = evt.target.value;
    return setQuery({search: value});
  };

  return (
    <div className={css.divForm}>
      <form className={css.form} onSubmit={Submit}>
        <input type='text' className={css.input} value={search ?? ''} onChange={setValue} />
        <button type='submit' className={css.button}> <ImSearch className={css.icon} size={20} /> </button>
      </form>
    </div>
  )
};
