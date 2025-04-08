import {
  createGallery,
  clearGallery,
  hideLoader,
  showLoader,
  iziToastFoo,
} from './js/render-functions.js';

import { getImagesByQuery } from '/js/pixabay-api';

const form = document.querySelector('.form');
const input = form.querySelector('input');
input.required = false;

form.addEventListener('submit', getCorrectImages);

function getCorrectImages(event) {
  event.preventDefault();
  showLoader();
  clearGallery();
  const inpValue = input.value.trim();
  if (inpValue === '') {
    iziToastFoo();
    clearGallery();
    hideLoader();
    return;
  }

  getImagesByQuery(inpValue)
    .then(hits => {
      if (hits.length === 0) {
        iziToastFoo();
        clearGallery();
      } else {
        createGallery(hits);
      }
    })
    .catch(error => console.log(error))

    .finally(() => {
      hideLoader();
      input.value = '';
    });
}
