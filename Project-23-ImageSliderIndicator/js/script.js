const socialItems = document.querySelectorAll('.thumb li img');

const bgColor = (value) => {
    const bodyBg = document.body;
    if (value.search('blue') > 0) bodyBg.style.background = '#0259aa';
    else if (value.search('black') > 0) bodyBg.style.background = '#1a1a1a';
    else return bodyBg.style.background = '#d40827';
}

socialItems.forEach(item => item.addEventListener('click', () => {
    const imgCar = document.querySelector('.car-pic');
    imgCar.src = item.src;
    bgColor(item.src)
}));