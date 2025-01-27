import s from './ImageModal.module.css';
import Container from '../Container/Container.jsx';
// import Modal from 'react-modal'

export default function ImageModal() {
  return (
    <section className={s.imageModal_section}>
      <Container className={s.imageModal_container}></Container>
    </section>
  );
}
