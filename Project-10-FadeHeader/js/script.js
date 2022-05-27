const bg = document.querySelector("#bg");

window.onscroll = () => {
    let winHeight = window.innerHeight;
    bg.style.opacity = 1 - +document.documentElement.scrollTop / winHeight;
}