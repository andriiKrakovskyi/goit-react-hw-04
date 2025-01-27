import s from './Loader.module.css';
import Container from '../Container/Container.jsx';
// import { color-ring-loading } from 'react-loader-spinner'

export default function Loader() {
  return (
    <section className={s.loader_section}>
      <Container className={s.loader_container}></Container>
    </section>
  );
}
