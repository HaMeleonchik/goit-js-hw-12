// axios
import axios from 'axios';

export function getImagesByQuery(query) {
  return axios('https://pixabay.com/api/', {
    params: {
      key: '29412071-9345ed042e2c0766a655100be',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  }).then(response => response.data.hits);
}
