const navigation = document.querySelector('.menu-top');
const sticky = navigation.offsetTop;

window.onscroll = () => {
    let winScroll = document.documentElement.scrollTop;
    if (document.documentElement.scrollTop > sticky) {
        navigation.classList.add('sticky');
    } else {
        navigation.classList.remove('sticky');
    }
}