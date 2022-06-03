const showDrawer = document.querySelector('.show-drawer')
const hideDrawer = document.querySelector('.hide-drawer')
const layer = document.querySelector('.layer-1')

showDrawer.addEventListener('click', () => {
    layer.classList.add('show')
})
hideDrawer.addEventListener('click', () => {
    layer.classList.remove('show')
})