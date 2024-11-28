import { fetchWeatherData } from "./weatherData.js";
import { getCurrentWeatherElement } from "./currentWeatherUI.js";
import { getDailyWeatherElement } from "./dailyWeatherUI.js";

export async function displayWeather() {
  const data = await fetchWeatherData();
  console.log(data);

  document.body.appendChild(getCurrentWeatherElement(data.currentConditions));
  document.body.appendChild(getDailyWeatherElement(data.days));
}
