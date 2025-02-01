import { useState } from 'react';
import { useEffect } from 'react';
// import clsx from 'clsx';
// import toast from 'react-hot-toast';
import * as dataPhotosService from './services/photos-api';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import NoMoreContent from './components/NoMoreContent/NoMoreContent';

function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [query, setQuery] = useState('');

  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(0);

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
        setPhotos((prev) => [...prev, ...results]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleSetQuery = (newQuery) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setPhotos([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleReset = () => {
    setPhotos([]);
    setPage(1);
  };

  const isMoreContent =
    Boolean(query) && !isLoading && page >= totalPages && totalPages > 0;

  console.log('Page:', page, 'Total Pages:', totalPages);
  console.log('results', photos);

  return (
    <>
      <SearchBar onSubmit={handleSetQuery} reset={handleReset} />
      <ImageGallery photos={photos} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {page < totalPages ? <LoadMoreBtn onClick={handleLoadMore} /> : null}
      {isMoreContent ? <NoMoreContent /> : null}
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
