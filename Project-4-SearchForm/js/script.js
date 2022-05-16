const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const inputTag = document.querySelector(".input");
btn.addEventListener("click", () => {
    search.classList.toggle('active');
    inputTag.focus();
})