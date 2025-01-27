import s from './SearchBar.module.css';
import Container from '../Container/Container.jsx';
// import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar() {
  return (
    <section className={s.searchBar_section}>
      <Container className={s.searchBar_container}>
        <header>
          <form>
            <input
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button type="submit">Search</button>
          </form>
        </header>
      </Container>
    </section>
  );
}
