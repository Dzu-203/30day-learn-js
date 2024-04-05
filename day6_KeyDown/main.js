var alerts = document.querySelector('.alert')
var container = document.querySelector('.container')
var key = document.querySelector('.key p:last-child')
var locations = document.querySelector('.location p:last-child')
var which = document.querySelector('.which p:last-child')
var code = document.querySelector('.code p:last-child')
var header = document.querySelector('.box-header')

console.log(key)

document.addEventListener('keydown', e=> {
    alerts.classList.add('hide');
    container.classList.remove('hide') 
    key.innerHTML =e.key; 
    locations.innerHTML = e.location;
    which.innerHTML =e.which;
    code.innerHTML = e.code;
    header.innerHTML = e.keyCode
})