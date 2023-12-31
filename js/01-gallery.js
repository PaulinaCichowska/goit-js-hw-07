import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector(".gallery");

galleryItems.forEach((e) => {
  let galleryItem = `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${e.preview}"
        data-source="${e.original}"
        alt="${e.description}"
      />
    </a>
  </div>`;
  gallery.insertAdjacentHTML("beforeend", galleryItem);
});

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  let target = e.target;
  let bigImage = target.getAttribute("data-source");

  if (bigImage != null) {
    basicLightbox.create(`<img src="${bigImage}">`).show();
  }
});
