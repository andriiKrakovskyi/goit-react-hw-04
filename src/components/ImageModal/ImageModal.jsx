import s from './ImageModal.module.css';

export default function ImageModal({ item }) {
  if (!item) return null;
  return (
    <div className={s.imageModal_wrapper}>
      <img
        className={s.imageModal_img}
        src={item?.urls?.regular || 'default-avatar.png'}
        alt={item?.alt_description || 'Image'}
      />

      <ul className={s.imageModal_list}>
        <li className={s.imageModal_item}>
          <span className={s.imageModal_value}>Likes</span>
          <span className={s.imageModal_quantity}>{item?.likes ?? 0}</span>
        </li>
        <li className={s.imageModal_item}>
          <span className={s.imageModal_value}>Description</span>

          <span className={s.imageModal_quantity_description}>
            {item.description || 'Not found'}
          </span>
        </li>
        <li className={s.imageModal_item}>
          <span className={s.imageModal_value}>Author</span>
          <span className={s.imageModal_quantity}>
            {item?.user?.name || 'Unknown'}
          </span>
        </li>
      </ul>
    </div>
  );
}
