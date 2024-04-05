    const box = document.querySelector('.box')
    const process = document.querySelector('.process')
    const heading = document.querySelector('h1');

    function update(percent) {
        let notification = process.querySelector('span')
        process.style.width = `${percent}%`
        notification.innerHTML = `${percent}%`
        document.body.style.background = `rgba(0,0,0,${percent / 100})`;
        heading.style.color = `rgba(255,255,255,${(percent / 100)})`;
        if (percent < 50) {
            heading.style.color = `rgb(0,0,0)`;
        }
    }   
    box.addEventListener('mousemove', function(e) {
        let processWidth = e.pageX - this.offsetLeft
        let percent = processWidth / this.offsetWidth
        percent = Math.round(percent * 100)
        update(percent)
    })
    
    
const inputSlider = document.querySelector('.input')

inputSlider.addEventListener('click', function () {
    document.body.style.background = `rgba(0,0,0,${this.value / 100})`;
})


const inputSlider2 = document.querySelector('.input2')

inputSlider2.addEventListener('change', function () {
    if (this.value == 1) {
        document.body.style.background = `rgb(255,255,255)`;
    } else if (this.value == 2) {
        document.body.style.background = `rgba(0,0,0)`;
    }
})
