let file = document.querySelector('#file')
let preview = document.querySelector('.preview')

file.addEventListener('change', function (e) {
    let files = file.files[0]
    console.log(files)
    if (!files.name.endsWith('.jpg')) {
        console.log("Lỗi")
        return
    } else {
    }
    let img = document.createElement('img')
    img.src = URL.createObjectURL(files)
    preview.appendChild(img)
})

