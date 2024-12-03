import { fetchWeatherData } from "./weatherData.js";
import { getCurrentWeatherElement } from "./currentWeatherUI.js";
import { getDailyForecastElement } from "./dailyWeatherUI.js";
import { appendScrollBtns } from "./scrollBtns.js";
import { convertTemp } from "./tempConversion.js";
import { createElement } from "./util.js";

export async function displayWeather(data) {
  const weatherDisplay = document.querySelector("div.weather-display");
  weatherDisplay.innerHTML = ""; // clear any previous weather or error messages

  const convertTempBtn = document.querySelector("button.change-scale");
  convertTempBtn.addEventListener("click", convertTemp);
  convertTempBtn.classList.remove("hidden");
  const mode = convertTempBtn.dataset.scale;
  console.log(mode);
  weatherDisplay.appendChild(getCurrentWeatherElement(data.currentConditions, mode));

  // Need to append display weather container to DOM first, so that it's 
  // properties(scrollLeft, offsetEdith, etc...) return accurate values
  const dailyForecastContainer = getDailyForecastElement(data.days, mode);
  weatherDisplay.appendChild(dailyForecastContainer);
  appendScrollBtns(dailyForecastContainer);
}
