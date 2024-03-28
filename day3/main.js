var open = document.querySelector('.container-open')
var modal = document.querySelector('.modal')
var iconClose = document.querySelector('.icon-close')
var btnClose = document.querySelector('.modal-buttonClose')

toggle = () =>{
    modal.classList.toggle('hide')
}
open.addEventListener("click", () => toggle())
iconClose.addEventListener("click", ()=> toggle())
btnClose.addEventListener("click", ()=>  toggle())