var search = document.querySelector('.search-input')
var search_input = document.querySelector('.search-input__input input')
var search_btn = document.querySelector('.search-input__btn')
search_btn.addEventListener('click', () =>{
    search.classList.toggle('setw-300')
    search_input.focus()
})