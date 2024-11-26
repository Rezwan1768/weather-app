import { fetchWeatherData } from "./weatherData.js";
import { currentWeather } from "./currentWeatherUI.js";
import { weatherEachDay } from "./dailyWeather.js";

export async function displayWeather() {
    const data = await fetchWeatherData();
    console.log(data);
    
    const [weatherNow, conditionsNow]= currentWeather(data.currentConditions);
    const currentWeatherDisply = document.querySelector("div.weather-current");
    currentWeatherDisply.append(weatherNow, conditionsNow);

    const daysWeather = weatherEachDay(data.days);
    const dailyWeatherDisplay = document.querySelector("div.daily-weather");
    dailyWeatherDisplay.append(...daysWeather)
}

