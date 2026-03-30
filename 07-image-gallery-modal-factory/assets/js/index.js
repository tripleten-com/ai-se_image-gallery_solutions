import { images } from "./images.js";
import { renderCarouselView } from "./carousel.js";
import { generateModal } from "./modal.js";

const homeSection = document.querySelector("#home");
const carouselSection = document.querySelector("#carousel");
const notFoundSection = document.querySelector("#not-found");

const openModal = generateModal({
  modalEl: document.querySelector("#confirmation-modal"),
  cancelBtnEl: document.querySelector(".modal__btn_type_cancel"),
  confirmBtnEl: document.querySelector(".modal__btn_type_confirm"),
  visibleClass: "modal_visible",
});

function renderHomeView() {
  homeSection.style.display = "block";
  carouselSection.style.display = "none";
  notFoundSection.style.display = "none";

  const imageTemplateEl = document.querySelector("#image-template");
  const imageContainerEl = document.querySelector(".gallery__list");
  imageContainerEl.innerHTML = "";

  function createImageEl(item) {
    const cloneEl = imageTemplateEl.content.querySelector("li").cloneNode(true);

    const imageEl = cloneEl.querySelector(".gallery__image");
    imageEl.src = item.src;
    imageEl.alt = item.alt;

    const likeBtn = cloneEl.querySelector(".gallery__btn_type_like");
    likeBtn.addEventListener("click", () => {
      likeBtn.classList.toggle("gallery__btn_type_like-filled");
    });

    const deleteBtn = cloneEl.querySelector(".gallery__btn_type_delete");
    deleteBtn.addEventListener("click", () => {
      openModal(() => cloneEl.remove());
    });

    return cloneEl;
  }

  function renderImageEl(item) {
    const imageEl = createImageEl(item);
    imageContainerEl.prepend(imageEl);
  }

  images.forEach(renderImageEl);
}

function renderNotFoundView() {
  homeSection.style.display = "none";
  carouselSection.style.display = "none";
  notFoundSection.style.display = "flex";
}

/**
 * Main router function that handles hash changes.
 * Reads the current hash and renders the appropriate view.
 */
function router() {
  const hash = window.location.hash.slice(1) || "home";

  if (hash === "home" || hash === "") {
    renderHomeView();
  } else if (hash === "carousel") {
    homeSection.style.display = "none";
    carouselSection.style.display = "block";
    notFoundSection.style.display = "none";
    renderCarouselView(images);
  } else {
    renderNotFoundView();
  }
}

window.addEventListener("DOMContentLoaded", router);
window.addEventListener("hashchange", router);
