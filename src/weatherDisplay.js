import { fetchWeatherData } from "./weatherData.js";
import { getCurrentWeatherElem } from "./currentWeatherUI.js";
import { weatherEachDay } from "./dailyWeather.js";

export async function displayWeather() {
    const data = await fetchWeatherData();
    console.log(data);
    
    document.body.appendChild(getCurrentWeatherElem(data.currentConditions));
   
    // const daysWeather = weatherEachDay(data.days);
    // const dailyWeatherDisplay = document.querySelector("div.daily-weather");
    // dailyWeatherDisplay.append(...daysWeather)
}

