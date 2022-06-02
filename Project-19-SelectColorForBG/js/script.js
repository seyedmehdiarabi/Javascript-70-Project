const SelectColor = document.querySelector('#select-color')
SelectColor.addEventListener('change', () => {
    document.body.style.background = SelectColor.value;
})