const favicon = document.querySelector('#favicon');
const btn = document.querySelectorAll('.btn');

btn.forEach(item => item.addEventListener('click', () => {
    const attrData = item.getAttribute('data');
    const redIcon = 'img/favicon.png';
    const greenIcon = 'img/faviconTwo.png';
    if (attrData === 'red') favicon.setAttribute('href', redIcon)
    else favicon.setAttribute('href', greenIcon)
}))