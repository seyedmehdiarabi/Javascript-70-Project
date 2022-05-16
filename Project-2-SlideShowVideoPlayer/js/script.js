const listLi = document.querySelectorAll(".nav-item");
listLi.forEach((item) => {
    item.addEventListener('click', () => {
        const slider = document.querySelector("#slider");
        let value = item.getAttribute('data');
        slider.src = `video/${value}.mp4`;
    })
});