// import { useState } from 'react';
// import { useEffect } from 'react';

import { useState, useEffect, useRef } from 'react';

import * as dataPhotosService from './services/photos-api';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import NoMoreContent from './components/NoMoreContent/NoMoreContent';
import ImageModal from './components/ImageModal/ImageModal';

import Modal from 'react-modal';
Modal.setAppElement('#root');

function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  // ===========================
  const [modalIsOpen, setIsOpen] = useState(false);
  const [openedPhoto, setOpenedPhoto] = useState(null);

  function openModal(selectedPhoto) {
    setIsOpen(true);
    setOpenedPhoto(selectedPhoto);
  }
  function closeModal() {
    setIsOpen(false);
    setOpenedPhoto(null);
  }
  // ========================
  //! ++++++++++++++++++++++++++++

  const firstNewPhotoRef = useRef(null); // 👈 Реф для первого нового фото
  //! ++++++++++++++++++++++++++++

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const { results, total_pages } = await dataPhotosService.fetchPhotos(
          query,
          page,
        );

        setTotalPages(total_pages);
        // setPhotos((prev) => [...prev, ...results]);

        //! ++++++++++++++++++++++++++++

        setPhotos((prev) => {
          if (page > 1 && results.length > 0) {
            firstNewPhotoRef.current = results[0]?.id; // 👈 Запоминаем ID первого нового фото
          }
          return [...prev, ...results];
        });

        //! ++++++++++++++++++++++++++++
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  //! ++++++++++++++++++++++++++++

  useEffect(() => {
    if (firstNewPhotoRef.current) {
      const element = document.getElementById(firstNewPhotoRef.current);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' }); // 👈 Плавная прокрутка
      }
    }
  }, [photos]);

  //!+++++++++++++++++++++++++++++=

  const handleSetQuery = (newQuery) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setPhotos([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const isMoreContent =
    Boolean(query) && !isLoading && page >= totalPages && totalPages > 0;

  // const isMoreContent = Boolean(query) && !isLoading && page >= totalPages;

  // =========================
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: 0,
      borderRadius: '10px',
      border: 'none',
    },
    overlay: {
      backgroundColor: 'rgb(50 50 50 / 80%)',
    },
  };
  // =========================

  return (
    <>
      <SearchBar onSubmit={handleSetQuery} disabled={isLoading} />
      {photos.length > 0 && (
        <ImageGallery photos={photos} onClick={openModal} />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {page < totalPages ? <LoadMoreBtn onClick={handleLoadMore} /> : null}
      {isMoreContent ? <NoMoreContent /> : null}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ImageModal item={openedPhoto} />
      </Modal>
    </>
  );
}

export default App;

// const handleReset = () => {
//   setArticles([]);
//   setPage(1);
//   toast.success(`All filters and pages reset to initial values`);
// };

// const handleLoadMore = () => {
//   if (page < totalPages) {
//     setPage((prev) => prev + 1);
//   }
// };
