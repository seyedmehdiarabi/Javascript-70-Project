const controls = document.querySelectorAll('.controls li');
const imgBox = document.querySelectorAll('.imgBox img');
let i = 0;

controls.forEach(item => item.addEventListener('click', () => {
    const attr = item.getAttribute('class');
    if (attr === 'next') {
        imgBox[i].classList.remove('active')
        i = (i + 1) % imgBox.length;
        imgBox[i].classList.add('active')
    } else {
        console.log(i);
        imgBox[i].classList.remove('active')
        i = (i - 1 + imgBox.length) % imgBox.length;
        imgBox[i].classList.add('active')
    }
}))