const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '28590338-d8bd85ed8cacc4ff76ae71c31';

function fetchQuery(searchQuery, page) {
  return fetch(
    `${BASE_URL}/?key=${API_KEY}&q=${searchQuery}
      &image_type=photo&orientation=horizontal&page=
      ${page}&per_page=12`
  ).then(response => response.json());
}

const api = { fetchQuery };

export default api;
