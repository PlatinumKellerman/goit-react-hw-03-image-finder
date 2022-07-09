import axios from 'axios';

export const options = {
  params: {
    key: '28501478-ddcb693bd2c6ca45180585ddb',
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 12,
  },
  totalHits: 0,
  totalPages: 0,
};

export async function getPic(currentImgName, currentPage) {
  options.params.q = currentImgName;
  options.params.page = currentPage;
  const BASE_URL = 'https://pixabay.com/api/';
  const response = await axios.get(BASE_URL, options);
  options.params.totalHits = response.data.totalHits;
  options.params.totalPages = Math.ceil(
    response.data.totalHits / options.params.per_page
  );
  return response.data.hits;
}
