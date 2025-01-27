import s from './ImageCard.module.css';
import Container from '../Container/Container.jsx';

export default function ImageCard() {
  return (
    <section className={s.imageCard_section}>
      <Container className={s.imageCard_container}>
        <div>
          <img src="" alt="" />
        </div>
      </Container>
    </section>
  );
}
