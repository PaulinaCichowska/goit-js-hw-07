import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector(".gallery");
let galleryElements = [];

galleryItems.forEach((e) => {
  let listElement = document.createElement("li");
  let template = `<a class="gallery__item" href="${e.original}">
      <img
        class="gallery__image"
        src="${e.preview}"
        alt="${e.description}"
      />
    </a>`;
  listElement.insertAdjacentHTML("beforeend", template);
  galleryElements.push(listElement);
});
gallery.append(...galleryElements);
let lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
