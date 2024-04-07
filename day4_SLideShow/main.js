var imgCard =  document.querySelectorAll('.card-item')
var inner =  document.querySelector('.inner')
var iconExit =  document.querySelector('.inner-exit')
var innerImg = document.querySelector('.inner-img')
var currentImg = document.querySelectorAll('.card-item img')
var innerPrev = document.querySelector('.inner-prev')
var innerNext = document.querySelector('.inner-next')
var postionIndex = 0;

function showImg(){
    if (postionIndex == currentImg.length - 1){
        innerNext.classList.add('hide')
    }else{
        innerNext.classList.remove('hide')
    }
    if (postionIndex == 0){
        innerPrev.classList.add('hide')
    }else{
        innerPrev.classList.remove('hide')
    }
    innerImg.src = currentImg[postionIndex].src;
    inner.classList.remove('hide');
}
imgCard.forEach((element,index) => {
    element.addEventListener('click', () => {
        postionIndex = index;
        showImg()  
    })
})
iconExit.addEventListener('click',() => {
    inner.classList.add('hide')
})

document.addEventListener('keydown',(e) => {
    if (e.keyCode == 27){
        inner.classList.add('hide')
    }
})
innerPrev.addEventListener('click', ()=> {
    if (postionIndex > 0){
        postionIndex--;
        showImg();
    }
})
innerNext.addEventListener('click', ()=> {
    if (postionIndex < currentImg.length){
        postionIndex++;
        showImg();
    }
    
})



