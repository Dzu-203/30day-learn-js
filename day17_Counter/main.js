cardNumber = document.querySelectorAll('.card .number')



function Counter(element, to) {
    let count = 0
    let counting = setInterval(() => {
        count += to / 250
        if (count < to) {
            element.innerHTML = Math.round(count)
        } else {
            clearInterval(counting)
            element.innerHTML = to
        }
        }, 1)
}

cardNumber.forEach(item => {
    let to = parseInt(item.innerHTML)
    Counter(item,to)
})

