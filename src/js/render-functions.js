// SimpleLightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const loader = document.querySelector('.loader');
const container = document.querySelector('.gallery');

// createGallery
export function createGallery(image) {
  let markup = image
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `
    <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
		    <img 
		      class="gallery-image" 
		      src="${webformatURL}" 
		      alt="${tags}" 
	    	/>
            <div class="gallery-info">
        <div class="info-item">
            <h3 class="title">Likes</h3>
            <p class="text">${likes}</p>
        </div>
        <div class="info-item">
            <h3 class="title">Views</h3>
            <p class="text">${views}</p>
        </div>
        <div class="info-item">
            <h3 class="title">Comments</h3>
            <p class="text">${comments}</p>
        </div>
        <div class="info-item">
            <h3 class="title">Downloads</h3>
            <p class="text">${downloads}</p>
        </div>
    </div>
	</a>
    </li>
    `
    )
    .join('');

  container.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  if (container) {
    container.innerHTML = '';
  }
}

// iziToast
export function iziToastFoo() {
  iziToast.show({
    titleColor: 'white',
    backgroundColor: 'red',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    messageColor: 'white',
    maxWidth: '322',
    position: 'topRight',
    iconUrl: 'icon/error.svg',
  });
}

// IziToastLastFoo

export function IziToastLastFoo() {
  iziToast.show({
    titleColor: 'white',
    backgroundColor: '#FFA000',
    message: "We're sorry, but you've reached the end of search results.",
    messageColor: 'white',
    position: 'topRight',
    iconUrl: 'icon/notification.svg',
    close: false,
  });
}

// loader
export function showLoader() {
  loader.style.display = 'block';
}
export function hideLoader() {
  loader.style.display = 'none';
}

// LoadMore
const BtnLoadMore = document.querySelector('.btn-load-more');

export function showLoadMoreButton() {
  if (BtnLoadMore) {
    BtnLoadMore.style.display = 'block';
  }
}
export function hideLoadMoreButton() {
  if (BtnLoadMore) {
    BtnLoadMore.style.display = 'none';
  }
}
