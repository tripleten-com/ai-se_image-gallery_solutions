function renderCarouselView(images) {
  let currentIndex = 0;

  const carouselEl = document.querySelector(".carousel");
  const leftBtn = carouselEl.querySelector(".carousel__btn_type_left");
  const rightBtn = carouselEl.querySelector(".carousel__btn_type_right");
  const carouselImageEl = carouselEl.querySelector(".carousel__image");

  function disableButton(buttonEl) {
    buttonEl.classList.add("carousel__btn_disabled");
    buttonEl.disabled = true;
  }
  function enableButton(buttonEl) {
    buttonEl.classList.remove("carousel__btn_disabled");
    buttonEl.removeAttribute("disabled");
  }

  function updateArrows() {
    if (currentIndex === 0) {
      disableButton(leftBtn);
    } else {
      enableButton(leftBtn);
    }

    if (currentIndex === images.length - 1) {
      disableButton(rightBtn);
    } else {
      enableButton(rightBtn);
    }
  }

  function updateDisplay() {
    carouselImageEl.src = images[currentIndex].src;
    carouselImageEl.alt = images[currentIndex].alt;
    updateArrows();
  }

  rightBtn.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      updateDisplay();
    }
  });

  leftBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateDisplay();
    }
  });

  updateDisplay();
}

export { renderCarouselView };
