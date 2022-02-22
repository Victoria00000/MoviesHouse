import css from './Search.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ImSearch } from 'react-icons/im';

export const Search = () => {
  const [InputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const Submit = evt => {
    evt.preventDefault();
    navigate('/?search=' + InputValue);
  };
  const setValue = evt => setInputValue(evt.target.value);

  return (
    <div className={css.divForm}>
      <form className={css.form} onSubmit={Submit}>
        <input type='text' className={css.input} value={InputValue} onChange={setValue} />
        <button type='submit' className={css.button}> <ImSearch className={css.icon} size={20} /> </button>
      </form>
    </div>
  )
};
