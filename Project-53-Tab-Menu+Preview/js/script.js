const tabMenu = document.querySelector('.tab-btn').children;
const item = document.querySelector('.portfolio-gallery').children;


for(let i = 0;i<tabMenu.length;i++){
    tabMenu[i].addEventListener('click', function(){
        for(let j = 0;j<tabMenu.length;j++){
            tabMenu[j].classList.remove('active');
        }
        this.classList.add('active');

        const target = this.getAttribute('data-target')

        for(let k = 0; k<item.length;k++){
            item[k].style.display ='none';
            if(target == item[k].getAttribute('data-id')){
                item[k].style.display = 'block';
            }
            if(target == 'all'){
                item[k].style.display = 'block'
            }
        }
    })
}


const gallery = document.querySelector('.portfolio-gallery');
const galleryItem = gallery.querySelectorAll('.item');
const lightbox = document.querySelector('.lightBox');
const lightboxImg = lightbox.querySelector('img');
const close = document.querySelector('.close');

lightbox.addEventListener('click', function(){
    if(event.target != lightboxImg){
        lightbox.classList.remove('show')
    }
})


close.addEventListener('click', function(){
    lightbox.classList.remove('show')
})

galleryItem.forEach(item =>{
    item.querySelector('span').addEventListener('click', function(){
        lightbox.classList.add('show');
        lightboxImg.src = item.querySelector('img').getAttribute('src');

    })
})
