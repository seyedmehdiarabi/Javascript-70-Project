const sideBar = document.querySelector('.side-bar');
const btn = document.querySelector('.side-bar .btn');

btn.addEventListener("click", () => {
    sideBar.classList.toggle('active');
});