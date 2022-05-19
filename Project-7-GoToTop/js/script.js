const toTop = document.querySelector('.to-top');
window.onscroll = () => {
    let winScroll = document.documentElement.scrollTop;

    if (winScroll > 200) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    }
}