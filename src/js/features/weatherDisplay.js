
import { getCurrentWeatherElement } from "./currentWeather.js";
import { getDailyForecastElement } from "./forecast.js";
import { appendScrollBtns } from "./components/scrollBtns.js";
import { createElement } from "../utils/util.js";


export async function displayWeather(weatherData, location) {
  const weatherContainer = document.querySelector("div.weather-container");
  weatherContainer.innerHTML = ""; // clear any previous weather or error messages

  // mode is used to determine if temperature should be displayed in F or C
  const mode = document.querySelector("button.change-scale").dataset.scale;

  // weatherDisplay will show the weathere of a selected day (default is current)
  const weatherDisplay = createElement("div", "weather-display");
  const currentWeather = getCurrentWeatherElement(
    weatherData.currentConditions,
    weatherData.timezone,
    location,
    mode);
  weatherDisplay.appendChild(currentWeather);
  weatherContainer.appendChild(weatherDisplay);

  // Shows weather data of the next 2 weeks plus todays
  const forecastDisplay = getDailyForecastElement(weatherData.days, mode);
  weatherContainer.appendChild(forecastDisplay);

  // Scroll Buttons needed to be appended later because their scroll amount
  // is based on the dimensions of forecastDisplay container
  appendScrollBtns(forecastDisplay);
}
