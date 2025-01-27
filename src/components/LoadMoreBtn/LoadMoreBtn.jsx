import s from './LoadMoreBtn.module.css';
import Container from '../Container/Container.jsx';

export default function LoadMoreBtn() {
  return (
    <section className={s.loadMoreBtn_section}>
      <Container className={s.loadMoreBtn_container}></Container>
    </section>
  );
}
