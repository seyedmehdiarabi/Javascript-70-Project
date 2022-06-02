const items = document.querySelectorAll('.nav-bar li a');
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', (e) => {
        e.preventDefault()
        let n = 0;
        while (n < items.length) {
            items[n++].className = '';
        }
        e.target.className = "active"
    })
}