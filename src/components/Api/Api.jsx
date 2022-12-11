const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '28590338-d8bd85ed8cacc4ff76ae71c31';

function fetchQuery(searchQuery, page) {
  return fetch(
    `${BASE_URL}/&q=${searchQuery}&key=${API_KEY}
      &image_type=photo&orientation=horizontal&page=
      ${page}&per_page=12`
  ).then(res => res.json());
}

export default fetchQuery;
