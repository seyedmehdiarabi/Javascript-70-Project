const imgBox = document.querySelectorAll('.imgBox');

imgBox.forEach(item => item.addEventListener('click', () => {
    item.classList.toggle('active')
}))