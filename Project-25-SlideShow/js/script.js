const items = document.querySelector('.slider-item').children;
const btns = document.querySelectorAll('.controls div');
let count = items.length;
let index = 0;
btns.forEach(item => item.addEventListener('click', () => {
    let dir = item.getAttribute('data')
    nextSlide(dir)
}));

const nextSlide = (dir) => {
    if (dir === 'next') {
        index++;
        if (index === count) index = 0;

    } else {
        if (index === 0) index = count - 1;
        else index--;
    }

    for (i = 0; i < count; i++) {
        items[i].classList.remove('active')
    }

    items[index].classList.add('active')

}