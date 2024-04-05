const city = document.querySelector('#city')
const country = document.querySelector('#country')
const day = document.querySelector('#day')
const time = document.querySelector('#time')
const temperature = document.querySelector('#temperature')
const season = document.querySelector('#season')
const item1 = document.querySelector('.item-1')
const item2 = document.querySelector('.item-2')
const item3 = document.querySelector('.item-3')
const inputSearch = document.querySelector('.card-header-input')
const apiKey = '278ac084aceb1d9a7cb82327a080b88e'
const cardMiddle = document.querySelector('.card-middle')

async function ChangeWeather(inputSearch) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputSearch}&appid=${apiKey}`
    let data = await fetch(apiUrl).then(res => res.json())
    if (data.cod == 200) {
        cardMiddle.classList.remove('hide')
        let currentDay = new Date()
        let years = currentDay.getFullYear()
        let months = String(currentDay.getMonth() + 1).padStart(2,'0')
        let days = String(currentDay.getDate()).padStart(2,'0')
        let hours = String(currentDay.getHours()).padStart(2,'0')
        let minutes = String(currentDay.getMinutes()).padStart(2,'0')
        let seconds = String(currentDay.getSeconds()).padStart(2,'0')
        let getHouseDay = ""
        if (hours > 12) {
            hours-=12
            getHouseDay = "PM"
        } else {
            getHouseDay = "AM"
        }
        let dayCurrent = `${days}/${months}/${years} `
        let timeCurent = `${hours}:${minutes}:${seconds}${getHouseDay} `
        city.innerHTML = data.name
        country.innerHTML = data.sys.country
        day.innerHTML = dayCurrent
        time.innerHTML = timeCurent
        item1.innerHTML = data.visibility + 'm'
        item2.innerHTML = data.wind.speed + "m/s"
        item3.innerHTML = data.main.humidity + "%"
        season.innerHTML = data.weather[0].main
        temperature.innerHTML = `${parseInt(data.main.temp - 273.15)}°C`
    }
    else {
        //xu li loi
        cardMiddle.classList.add('hide')
    }
}
inputSearch.addEventListener("keydown", (e) => {
    if (e.code == "Enter") {
        ChangeWeather(inputSearch.value)
    }
})