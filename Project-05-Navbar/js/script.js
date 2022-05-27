const toggleBtn = document.querySelector("#toggle");
toggleBtn.addEventListener("click", (e) => {
    const nav = document.querySelector("#navigation");
    nav.classList.toggle('acvite');
    toggleBtn.classList.toggle('active');
});