const textArea = document.querySelector('#desc')
const remaining = document.querySelector('#text-remaining')
let maxChars = 250;
textArea.addEventListener('input', () => {
    const totalRemaining = maxChars - textArea.value.length
    const color = totalRemaining < (maxChars * .1) ? 'red' : null;
    remaining.textContent = `کاراکتر باقیمانده ${totalRemaining} !`;
    remaining.style.color = color;
    if (totalRemaining === 0) {
        remaining.textContent = 'حداکثر کاراکتر مجاز 250 می باشد!'
    }
    console.log(maxChars);
})