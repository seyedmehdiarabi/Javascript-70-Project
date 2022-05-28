const accordion = document.querySelectorAll('.accordion-title');
accordion.forEach(item => item.addEventListener('click', () => {
    item.classList.toggle('active');
    const content = item.nextElementSibling;
    if (content.style.height) {
        content.style.height = null
    } else {
        content.style.height = content.scrollHeight + 'px';

    }
}))