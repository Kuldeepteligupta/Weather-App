const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const cityName = document.querySelector(".search input");
const button = document.querySelector(".search button");
const icon = document.querySelector(".weather_icon");


button.addEventListener("click", () => {
    weatherData(cityName.value);
})

console.log(cityName);

const apiKey = "09b6349dc4a415d72cee43bdd57acce7"
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const weatherData = (async (cityName) => {
    let Response = await fetch(url + cityName + `&appid=${apiKey}`);
    let data = await Response.json();
    console.log(data);

    city.innerText = data.name;
    temp.innerText = data.main.temp + "°C";
    humidity.innerText = data.main.humidity + "%";
    wind.innerText = data.wind.speed + "km/h";



    if (data.weather[0].main == "Clouds") {
        icon.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        icon.scr = "images/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        icon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        icon.src = "images/drizzle.png";
    }


});

