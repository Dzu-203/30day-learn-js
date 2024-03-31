box = document.querySelector('.box')
boxx2 = document.querySelector('.box-box')
boxx31 = document.querySelector('.box-box-box1')
boxx32 = document.querySelector('.box-box-box2')
box2 = document.querySelector('.box2')

for (let i = 0; i < 3; i++){
    boxx2.innerHTML+= `
        <li>${i}</li>
    `
}
console.log(boxx2.parentElement.innerHTML)