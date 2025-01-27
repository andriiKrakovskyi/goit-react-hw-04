import s from './ErrorMessage.module.css';
import Container from '../Container/Container.jsx';

export default function ErrorMessage() {
  return (
    <section className={s.errorMessage_section}>
      <Container className={s.errorMessage_container}></Container>
    </section>
  );
}
