(() => {
  const refs = {
    openModalBtn: document.querySelector(".js-buynow-container"),
    closeModalBtn: document.querySelector(".js-open-buynow"),
    modal: document.querySelector(".js-close-buynow"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();