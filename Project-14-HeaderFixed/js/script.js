window.addEventListener("scroll", () => {
    const header = document.querySelector('header');
    const scrollTop = document.documentElement.scrollTop;
    header.classList.toggle('sticky', scrollTop > 100)
        // if (scrollTop > 200) {
        //     header.classList.add('sticky')
        // } else {
        //     header.classList.remove('sticky')
        // }
});