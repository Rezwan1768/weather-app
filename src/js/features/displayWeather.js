import { getCurrentWeather } from "./currentWeather.js";
import { getDailyForecast } from "./dailyForecast.js";
import { appendScrollBtns } from "../components/dailyForecast/scrollBtns.js";
import { createElement } from "../utils/util.js";

export async function displayWeather(weatherData, location) {
  // Will need to pass these paramters twice, easier to pass thme as an object
  const currentWeatherParams = {
    currentCond: weatherData.currentConditions,
    timezone: weatherData.timezone,
    location,
  };

  const weatherContainer = document.querySelector("div.weather-container");
  weatherContainer.innerHTML = ""; // Clear prevous weather

  // weatherDisplay will show the weathere of a selected day (default is current)
  const weatherDisplay = createElement("div", "weather-display");
  const currentWeather = getCurrentWeather(currentWeatherParams);
  weatherDisplay.appendChild(currentWeather);
  weatherContainer.appendChild(weatherDisplay);

  // Shows weather data of the next 2 weeks plus todays
  const forecastDisplay = getDailyForecast(
    weatherData.days,
    currentWeatherParams,
  );
  weatherContainer.appendChild(forecastDisplay);

  // Scroll Buttons needed to be appended later because their scroll amount
  // is based on the dimensions of forecastDisplay container
  appendScrollBtns(forecastDisplay);
}
