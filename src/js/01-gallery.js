// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const galleryBox = document.querySelector("div.gallery");

const allImages = galleryItems.map((image) => 
  `<div class="gallery__item">
        <a class="gallery__link" href="${image.original}">
            <img class="gallery__image"
             src="${image.preview}"
             alt="${image.description}"
             data-source="${image.original}">
        </a>
    </div>`
).join("");

galleryBox.insertAdjacentHTML("afterbegin", allImages)

const gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
});


console.log(galleryItems);
