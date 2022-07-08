import axios from 'axios';

const options = {
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
};

export async function getPic(currentImgName) {
  options.params.q = currentImgName;
  const BASE_URL = 'https://pixabay.com/api/';
  const response = await axios.get(BASE_URL, options);
  return response.data.hits;
}
