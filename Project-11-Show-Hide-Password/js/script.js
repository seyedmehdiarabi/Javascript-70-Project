const password = document.querySelector('#password');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
    showHide()
})

function showHide() {
    if (password.type === "password") {
        toggle.classList.add('hide')
        password.setAttribute('type', 'text');

    } else {
        password.setAttribute('type', 'password');
        toggle.classList.remove('hide')
    }
}