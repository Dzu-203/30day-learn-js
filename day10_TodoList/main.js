const input = document.querySelector('.form-input')
const btn = document.querySelector('.form-btn')
const form = document.querySelector('#form')
const todo = document.querySelector('.todo')
const todoItem = document.querySelector('.todo-item')


function addTag(val) {
    var li = document.createElement('li')
    li.innerHTML = `
        <span>${val.text}</span>
                <i class="fa-solid fa-trash"></i>
    `
    li.setAttribute('class','todo-item')
    if (val.status === 'deleted') {
        li.classList.add('deleted')
    }
    todo.appendChild(li)
    input.value = ""
    
}
form.addEventListener('submit', (event) => {
    event.preventDefault()
    let val = input.value.trim()
    if (val) {
        addTag({
            text: val
        })
    }
})
todo.addEventListener('click',(e) => {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.classList.toggle('deleted')
    } else if(e.target.tagName === "I"){
        e.target.parentElement.remove()
    }
})



