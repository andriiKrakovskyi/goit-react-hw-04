import axios from 'axios';

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
      // perPage,
      per_page: perPage,
    },
  });

  console.log('response.data.results:', response.data.results);
  console.log('response.data:', response.data);
  console.log('response:', response);
  return response.data;
};

// export const fetchArticlesq = async (query, page, perPage) => {
//   const response = await axios.get(
//     `http://hn.algolia.com/api/v1/search?query=${query}&page=${page}&hitsPerPage=${perPage}`,
//   );
//   console.log('response.data:', response.data);
//   console.log('response:', response);
//   return response.data;
// };
