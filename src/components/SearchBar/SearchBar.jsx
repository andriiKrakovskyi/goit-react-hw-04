import s from './SearchBar.module.css';
import Container from '../Container/Container.jsx';
import toast from 'react-hot-toast';

export default function SearchBar({ onSubmit, disabled }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const input = form.elements.inputSearchBar;
    const inputValue = input.value.trim();

    if (!inputValue) {
      toast.error('Please enter a search term');
      return;
    }

    onSubmit(inputValue);
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
                name="inputSearchBar"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                maxLength="20"
              />
            </label>
            <button
              className={s.searchBar_button}
              disabled={disabled}
              aria-label="Search button"
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
