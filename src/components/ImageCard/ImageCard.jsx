import s from './ImageCard.module.css';

import ImageModal from '../ImageModal/ImageModal.jsx';
import { useState } from 'react';

export default function ImageCard({ item }) {
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div onClick={onClick} className={s.imageCard_wrapper}>
      <img
        className={s.imageCard_img}
        src={item.urls.small || 'default-avatar.png'}
        alt={item.alt_description || 'Image'}
      />
      {open && <ImageModal item={item} onClose={onClose} />}
    </div>
  );
}
