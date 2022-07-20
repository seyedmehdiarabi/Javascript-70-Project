const allBox = document.querySelector('.content').children;
const boxWidth = allBox[0].querySelector('.inner').offsetWidth;
const boxHeight = allBox[0].querySelector('.inner').offsetHeight;


const div = document.createElement('div');
div.style.position = "absolute";
div.style.width = boxWidth + "px";
div.style.height = boxHeight + "px";
div.style.backgroundColor = "#F50057";
div.style.transition = "all 1s ease"
div.style.left = allBox[0].querySelector('.inner').offsetLeft + "px";
div.style.top = allBox[0].querySelector('.inner').offsetTop + "px";
document.querySelector('.grid-box').appendChild(div);


for(let i =0;i<allBox.length;i++){
    allBox[i].addEventListener('click',function(){
        const x = this.offsetLeft;
        const y = this.offsetTop;
        div.style.left = x + "px";
        div.style.top = y + "px";
        const width = this.offsetWidth;
        const height = this.offsetHeight;
        div.style.width = width + "px";
        div.style.height = height + "px";
    })
}