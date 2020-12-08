const searchForm = document.querySelector('.search-location');
const cityValue= document.querySelector('.search-location input');
const cityName = document.querySelector('.city-name p');
const weatherDescription = document.querySelector('.weather-condition');
const humidity = document.querySelector('.the-humidity'); 
const temperature = document.querySelector('.the-temperature');
const feelsLike = document.querySelector('.feels-like');
const highTemp = document.querySelector('.high');
const lowTemp = document.querySelector('.low');
const iconImage = document.querySelector('.icon-container img');

const spitOutCelsius=(kelvin) => {
let celsius = Math.round(kelvin-273.15);
 return celsius;
}

updateWeatherApp = (city) => {
    cityName.textContent = city.name;
    console.log(city,name);
    weatherDescription.textContent = city.weather[0].description;
    humidity.textContent = city.main.humidity + '%';
    temperature.textContent = spitOutCelsius(city.main.temp) + '°C';
    feelsLike.textContent = spitOutCelsius(city.main.feels_like) + '°C';
    highTemp.textContent = 'high of ' + spitOutCelsius(city.main.temp_max) + '°C';
    lowTemp.textContent = 'low of ' + spitOutCelsius(city.main.temp_min) + '°C';
    const iconURL = `http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`
    iconImage.setAttribute('src',iconURL)


    //temperature.textcontent = c
}

//adding event listener to form

searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const citySearched = cityValue.value.trim();
    console.log(citySearched)
    searchForm.reset();


    requestCity(citySearched)
    .then((data) => {
        updateWeatherApp(data);
     })
    .catch((error) => { console.log(error) })
    
})