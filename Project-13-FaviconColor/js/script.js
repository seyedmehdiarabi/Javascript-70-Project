const favicon = document.querySelector('#favicon');
const btn = document.querySelectorAll('.btn');

btn.forEach(item => item.addEventListener('click', () => {
    const attr = favicon.getAttribute('href');
    const greenIcon = 'img/faviconTwo.png';
    const redIcon = 'img/favicon.png';
    if (attr === redIcon) favicon.setAttribute('href', greenIcon)
    else favicon.setAttribute('href', redIcon)

}))