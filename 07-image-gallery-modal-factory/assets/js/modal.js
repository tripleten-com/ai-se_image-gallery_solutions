function generateModal(config) {
  return function openModal(onConfirm) {
    config.modalEl.classList.add(config.visibleClass);

    function close() {
      config.modalEl.classList.remove(config.visibleClass);
      config.confirmBtnEl.removeEventListener("click", handleConfirm);
      config.cancelBtnEl.removeEventListener("click", close);
    }

    function handleConfirm() {
      onConfirm();
      close();
    }

    config.confirmBtnEl.addEventListener("click", handleConfirm);
    config.cancelBtnEl.addEventListener("click", close);
  };
}

export { generateModal };
