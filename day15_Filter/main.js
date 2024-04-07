
let url = 'http://fakestoreapi.com/products'
fetch(url)
    .then(res => {
        return res.json()
    })
    .then(data => {
        let products = document.querySelector('.search-product-box')
        data.forEach(item => {
        let div = document.createElement('div')
        div.classList.add('search-product-item')
        div.innerHTML = 
            `
            <img src="${item.img}" alt="">
            <div class="search-product-content">
                <p>${item.name}</p>
                <p>${item.coin}</p>
            </div>
            `
        products.appendChild(div)
        })
        

let h3 = document.querySelector('h3')
let inputSearch = document.querySelector('.search-input input')
inputSearch.addEventListener('input', function (e) {
    let inputs = e.target.value.trim().toLowerCase()
    let listProduct = document.querySelectorAll('.search-product-item')
    listProduct.forEach(item => {
        if (item.innerText.toLowerCase().includes(inputs)) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
})
