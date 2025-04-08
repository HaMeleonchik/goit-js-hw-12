// SimpleLightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const loader = document.querySelector('.loader');
const container = document.querySelector('.gallery');

// SimpleLightbox
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

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

  container.innerHTML = markup;
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

// loader
export function showLoader() {
  loader.style.display = 'block';
}
export function hideLoader() {
  loader.style.display = 'none';
}
