const modal = document.querySelector('.modal');
const btnModalOpen = document.querySelectorAll('.btn-link');
const modalClose = document.querySelector('.modal__close');

btnModalOpen.forEach((btn) => btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.remove('d-none');
}));

modalClose.addEventListener('click', () => modal.classList.add('d-none'));

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      modal.classList.add('d-none');
    }
});