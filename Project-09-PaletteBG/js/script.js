const btnsColor = document.querySelectorAll('.box span');

btnsColor.forEach((item) => {
    item.addEventListener('click', () => {
        document.body.style.background = document.getElementById(item.id).innerHTML;
    })
});