import s from './SearchBar.module.css';
import Container from '../Container/Container.jsx';
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function SearchBar({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (inputValue.trim() === '') {
      toast.error('Please enter a search term');
      return;
    }
    onSubmit(inputValue);
  };

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  return (
    <section className={s.searchBar_section}>
      <Container className={s.searchBar_container}>
        <header className={s.searchBar_header}>
          <form className={s.searchBar_form} onSubmit={handleSubmit}>
            <label>
              <span className="visually_hidden">Search for images</span>
              <input
                className={s.searchBar_input}
                // onChange={(evt) => setInputValue(evt.target.value)}
                onChange={handleChange}
                value={inputValue}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                maxLength="20"
              />
            </label>
            <button
              className={s.searchBar_button}
              aria-label={` Search button`}
              type="submit"
            >
              Search
            </button>
          </form>
        </header>
      </Container>
    </section>
  );
}
