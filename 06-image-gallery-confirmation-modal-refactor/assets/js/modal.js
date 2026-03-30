const confirmationModal = document.querySelector("#confirmation-modal");
const cancelBtnEl = confirmationModal.querySelector(".modal__btn_type_cancel");
const confirmBtnEl = confirmationModal.querySelector(
  ".modal__btn_type_confirm",
);

function openModal(onConfirm) {
  confirmationModal.classList.add("modal_visible");

  function close() {
    confirmationModal.classList.remove("modal_visible");
    confirmBtnEl.removeEventListener("click", handleConfirm);
    cancelBtnEl.removeEventListener("click", close);
  }

  function handleConfirm() {
    onConfirm();
    close();
  }

  confirmBtnEl.addEventListener("click", handleConfirm);
  cancelBtnEl.addEventListener("click", close);
}

export { openModal };
