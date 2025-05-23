import {
  createGallery,
  clearGallery,
  hideLoader,
  showLoader,
  iziToastFoo,
  IziToastLastFoo,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

import { getImagesByQuery } from '/js/pixabay-api';

const form = document.querySelector('.form');
const input = form.querySelector('input');

input.required = false;
let inputValueGlobal = '';
let totalHits = 0;
let page = 1;

form.addEventListener('submit', getCorrectImages);

function getCorrectImages(event) {
  event.preventDefault();
  showLoader();
  hideLoadMoreButton();
  clearGallery();
  const inpValue = input.value.trim();
  if (inpValue === '') {
    iziToastFoo();
    clearGallery();
    hideLoader();
    hideLoadMoreButton();
    return;
  }
  inputValueGlobal = inpValue;
  page = 1;
  getImagesByQuery(inputValueGlobal)
    .then(({ hits, totalHits: total }) => {
      totalHits = total;
      if (hits.length === 0) {
        iziToastFoo();
        clearGallery();
        hideLoadMoreButton();
      } else {
        createGallery(hits);
        checkImageMaxImage();
      }
    })
    .catch(error => console.log(error))

    .finally(() => {
      hideLoader();
      input.value = '';
    });
}

const BtnLoadMore = document.querySelector('.btn-load-more');
BtnLoadMore.addEventListener('click', LoadMoreFoo);

async function LoadMoreFoo() {
  try {
    showLoader();
    hideLoadMoreButton();

    page += 1;
    const { hits } = await getImagesByQuery(inputValueGlobal, page);

    if (hits.length === 0) {
      IziToastLastFoo();
      hideLoadMoreButton();
      return;
    }
    createGallery(hits);

    if (page * 15 >= totalHits) {
      hideLoadMoreButton;
      IziToastLastFoo();
    } else {
      showLoadMoreButton();
    }

    const card = document.querySelector('.gallery-item');
    const cardHeight = card.getBoundingClientRect().height;
    window.scrollBy({
      left: 0,
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    console.log(error);
    IziToastLastFoo();
  } finally {
    hideLoader();
  }
}
function checkImageMaxImage() {
  if (page * 15 < totalHits) {
    showLoadMoreButton();
  } else {
    hideLoadMoreButton();
  }
}
