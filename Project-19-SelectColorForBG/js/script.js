const SelectColor = document.querySelector('#select-color')
SelectColor.addEventListener('change', (e) => {
    document.body.style.background = SelectColor.value;
})