// import { useState } from 'react'
// import {  useEffect } from "react";
// import clsx from 'clsx';
// import axios from "axios";

import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';

import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <>
      <SearchBar />
      <ImageGallery />
      <ImageModal />
      <Loader />
      <LoadMoreBtn />
      <ErrorMessage />
    </>
  );
}

export default App;
