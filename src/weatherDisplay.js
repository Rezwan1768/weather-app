import { fetchWeatherData } from "./weatherData.js";
import { currentWeather } from "./currentWeatherUI.js";

export async function displayWeather() {
    const data = await fetchWeatherData();
    console.log(data);
    const displayContainer = document.querySelector("div.display");
    const currentWeatherContainer= currentWeather(data.currentConditions);
    displayContainer.appendChild(currentWeatherContainer);
}

