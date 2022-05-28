const skewed = document.querySelector('.angel');

window.onscroll = () => {
    let winScroll = -10 + window.scrollY / 60;
    console.log(winScroll);
    skewed.style.transform = `skewY(${winScroll}deg)`;
}