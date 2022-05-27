const profile = document.querySelector('.profile');

profile.addEventListener("click", () => {
    const toggleMenu = document.querySelector(".menu");
    toggleMenu.classList.toggle('active');
});