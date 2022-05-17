const progress = document.querySelector('.progress-bar');
window.addEventListener("scroll", () => {
    const winScroll = window.pageYOffset; //document.documentElement.scrollTop;
    const winHeight = document.documentElement.scrollHeight - window.innerWidth;
    const scrolled = (winScroll / winHeight) * 100;
    progress.style.width = `${Math.round(scrolled)}%`;
});