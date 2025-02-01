import s from './ImageModal.module.css';
// import Container from '../Container/Container.jsx';
import Modal from 'react-modal';

// export default function ImageModal({ item, onClose }) {
//   return (
//     <section className={s.imageModal_section}>
//       <Container className={s.imageModal_container}>
//         <div className={s.imageModal_wrapper}>
//           <Modal
//             isOpen={!!item}
//             onRequestClose={onClose}
//             className={s.imageModal_modalContent}
//             overlayClassName={s.modalOverlay}
//             contentLabel="Example Modal"
//             shouldCloseOnOverlayClick={true} // Закрытие при клике на фон
//           >
//             <div className={s.imageModal_modalWrapper_img}>
//               <img
//                 className={s.imageModal_modalImage}
//                 src={item.urls.regular || 'default-avatar.png'}
//                 alt={item.alt_description || 'Image'}
//               />
//             </div>
//           </Modal>
//         </div>
//       </Container>
//     </section>
//   );
// }

export default function ImageModal({ item, onClose }) {
  console.log('item.description:', item.description);
  if (!item) return null;
  return (
    <div className={s.imageModal_wrapper}>
      <Modal
        isOpen={!!item}
        onRequestClose={onClose}
        className={s.imageModal_modalContent}
        overlayClassName={s.modalOverlay}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={true} // Закрытие при клике на фон
      >
        <div className={s.imageModal_modalWrapper_img}>
          <img
            className={s.imageModal_modalImage}
            src={item.urls.regular || 'default-avatar.png'}
            alt={item.alt_description || 'Image'}
          />

          <ul className={s.imageModal_modalWrapper_list}>
            <li className={s.imageModal_modalWrapper_item}>
              <span className={s.imageModal_modalWrapper_value}>Likes</span>
              <span className={s.imageModal_modalWrapper_quantity}>
                {item.likes}
              </span>
            </li>
            <li className={s.imageModal_modalWrapper_item}>
              <span className={s.imageModal_modalWrapper_value}>
                Description
              </span>
              <span className={s.imageModal_modalWrapper_quantity}>
                {item.description || 'Not found'}
              </span>
            </li>
            <li className={s.imageModal_modalWrapper_item}>
              <span className={s.imageModal_modalWrapper_value}>Author</span>
              <span className={s.imageModal_modalWrapper_quantity}>
                {item.user.name}
              </span>
            </li>
          </ul>
        </div>
      </Modal>
    </div>
  );
}
