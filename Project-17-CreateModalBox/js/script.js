const showModal = document.querySelector('#showModal');
const modalContainer = document.querySelector('.modal-container')
const closeModal = document.querySelector('#close-modal')
showModal.addEventListener('click', () => {
    modalContainer.classList.add('show');
})
closeModal.addEventListener('click', () => {
    modalContainer.classList.remove('show');
})