const open = document.querySelector('#open');
const close = document.querySelector('#close');
const container = document.querySelector('.container');


open.addEventListener('click', () => {
    container.classList.add('show-nav');
})

close.addEventListener('click', () => {
    container.classList.remove('show-nav');
})

accordion.forEach(item => item.addEventListener('click', () => {
    item.classList.toggle('active');
    const content = item.nextElementSibling;
    if (content.style.height) {
        content.style.height = null
    } else {
        content.style.height = content.scrollHeight + 'px';

    }
}))