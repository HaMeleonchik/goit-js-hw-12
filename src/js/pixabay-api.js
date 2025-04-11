// axios
import axios from 'axios';

export async function getImagesByQuery(query, page = 1) {
  let response = await axios('https://pixabay.com/api/', {
    params: {
      key: '29412071-9345ed042e2c0766a655100be',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 100,
    },
  });
  return {
    hits: response.data.hits,
    totalHits: response.data.totalHits,
  };
}
