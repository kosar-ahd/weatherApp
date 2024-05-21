const $ = document

const input = $.querySelector('input')
let now = new Date

const city_country = $.querySelector('.city_country')
const date = $.querySelector('.date')
const temp = $.querySelector('.temp')
const air = $.querySelector('.air')
const min_max = $.querySelector('.min_max')

let api = {
    url : 'https://api.openweathermap.org/data/2.5/weather?q=',
    apiKey : 'ed8fca45116fcb18098d459c50a450a5'
}

function fetchingData (){
    let cityName = input.value

    fetch(`${api.url}${cityName}&appid=${api.apiKey}`)
    .then(res =>  res.json())
    .then(data => {
        console.log(data);

        city_country.innerHTML = `${data.name} , ${data.sys.country}` 
        date.innerHTML = `${now.getFullYear()} / ${now.getMonth()} / ${now.getDate()}`
        temp.innerHTML = `${Math.floor(data.main.temp - 273.15)} °c`
        air.innerHTML = data.weather[0].main
        min_max.innerHTML = `${Math.floor(data.main.temp_max - 273.15)} °c / ${Math.floor(data.main.temp_min - 273.15)} °c`
    })
}

input.addEventListener('keydown' , e => {
    if(e.keyCode == 13){
        fetchingData()
        input.value = ''
    }
    
})

