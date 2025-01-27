import s from './ImageGallery.module.css';
import Container from '../Container/Container.jsx';
// import ImageCard from './components/ImageCard/ImageCard';

export default function ImageGallery() {
  return (
    <section className={s.imageGallery_section}>
      <Container className={s.imageGallery_container}>
        <ul>
          {/* Набір елементів списку із зображеннями */}
          <li>
            <div>
              <img src="" alt="" />
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
}
