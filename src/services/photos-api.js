import axios from 'axios';
import.meta.env.VITE_API_KEY;

/**
 * Fetches  photos from Unsplash API based on query parameters.
 *
 * @param {string} query - The search query string.
 * @param {number} page - The page number for pagination.
 * @param {number} perPage - The number of results per page.
 * @returns {Promise<Object>} - The response data from the API.
 */

export const fetchPhotos = async (query, page, perPage = 30) => {
  const API_URL = 'https://api.unsplash.com/search/photos';
  const API_KEY = '7HNfztRxpHo88IaIoYhHD3M9MpsdrF0nYBjRvwUgzP8';

  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
    params: {
      query,
      page,
      per_page: perPage,
    },
  });

  return response.data;
};

// axios.defaults.baseURL = 'https://api.unsplash.com/';
// axios.defaults.headers.common['Authorization'] = `Client-ID ${
//   import.meta.env.VITE_API_KEY
// }`;

// axios.defaults.params = {
//   orientation: 'landscape',
//   per_page: 30,
// };

// export const fetchPhotos = async (query, page) => {
//   const { data } = await axios.get(`search?query=${query}&page=${page}`);
//   console.log('data:', data);
//   return data;
// };
