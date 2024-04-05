let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let repassword = document.querySelector('#repassword');
let btnSignup = document.querySelector('.btn-signup');
let errors = document.querySelectorAll('.error-mes');
let boxLogin = document.querySelector('.box-login')


function showError(input, message) {
    let parent = input.parentElement;
    let error = parent.querySelector('.error-mes')
    error.innerHTML = message
    let border = parent.querySelector('span')
    border.classList.add('border-input-error')
}

function ShowSuccess(input) {
    let parent = input.parentElement;
    let error = parent.querySelector('.error-mes')
    error.innerHTML = ""
    let border = parent.querySelector('span')
    border.classList.remove('border-input-error')

}

function CheckEmpty(listInput) {
    let checkEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim();
        if (!input.value) {
            checkEmptyError = true;
            showError(input, `Không được để trống`);
        } else {
            ShowSuccess(input);
        }
    });
    return checkEmptyError;
}



function CheckEmail(input) {
    let regexPass = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isFormatPassError = false
    const inputs = input.value.trim()
    if (!regexPass.test(inputs)) {
        isFormatPassError = true
        showError(input, "Email không đúng định dạng")
    } else {
        ShowSuccess(input)
    }
    return isFormatPassError
}

function CheckLength(input, min, max) {
    let isLengthError = false
    input.value = input.value.trim()
    if ((input.value).length < min || (input.value).length > max) {
        isLengthError = true
        showError(input, `Độ dài phải từ ${min} đến ${max}`)
    } else {
        ShowSuccess(input)
    }
    return isLengthError
}

function CheckRePass(pass, repass) {
    let isCheck = false
    if (pass.value !== repass.value) {
        showError(repass, `Mật khẩu không trùng nhau`)
    } else {
        ShowSuccess(repass)
    }
}
boxLogin.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!CheckEmpty([username, email, password, repassword])) {

    }
    if (!CheckLength(username, 6, 10)) {

    }
    if (!CheckLength(email, 6, 30)) {
        if (!CheckEmail(email)) {

        }
    }

    if (!CheckLength(password, 6, 10)) {
        if (!CheckRePass(password, repassword)) {

        }
    }
    if (!CheckLength(repassword, 6, 10)) {
        if (!CheckRePass(repassword, password)) {

        }
    }
})