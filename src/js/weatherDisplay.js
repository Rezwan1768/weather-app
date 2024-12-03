import { fetchWeatherData } from "./weatherData.js";
import { getCurrentWeatherElement } from "./currentWeatherUI.js";
import { getDailyForecastElement } from "./dailyWeatherUI.js";
import { appendScrollBtns } from "./scrollBtns.js";
import { convertTemp } from "./tempConversion.js";
import { createElement } from "./util.js";

export async function displayWeather(data) {
  const weatherDisplay = document.querySelector("div.weather-display");
  weatherDisplay.innerHTML = ""; // clear any previous weather
  const convertTempBtn = createElement("button", "change-scale", "Celsius");
  convertTempBtn.addEventListener("click", convertTemp);
  weatherDisplay.appendChild(convertTempBtn);

  weatherDisplay.appendChild(getCurrentWeatherElement(data.currentConditions));

  // Need to append display weather container to DOM first, so that it's 
  // properties(scrollLeft, offsetEdith, etc...) return accurate values
  const dailyForecastContainer = getDailyForecastElement(data.days);
  weatherDisplay.appendChild(dailyForecastContainer);
  appendScrollBtns(dailyForecastContainer);
}
