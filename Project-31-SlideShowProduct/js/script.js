const imgBox = document.querySelectorAll('.box');
const box = document.querySelector('.thumb-img').children;

imgBox.forEach(item=>item.addEventListener('click',()=>{
    for(let i = 0; i< box.length;i++){
        box[i].classList.remove('active');
    }

    item.classList.add('active');
    document.querySelector('.img').src = item.children[0].src;
}))
