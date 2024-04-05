const btn = document.querySelector('.btn')
const box = document.querySelector('.box')


btn.addEventListener('click', () => {
    box.classList.remove('hide')
    box.classList.add('active2')
    setTimeout(() => {
        box.classList.remove('active')
    },800)
    let border = box.querySelector('.border')
    console.log(border)
    border.classList.add('active')
    setTimeout(() => {
        border.classList.remove('active')
    }, 2000);
    setTimeout(() => {
        box.classList.add('hide')
    },3000)
    console.log(border)
})