
import { getCurrentWeatherElement } from "../components/currentWeatherUI.js";
import { getDailyForecastElement } from "../components/dailyForecastUI.js";
import { appendScrollBtns } from "../components/scrollBtns.js";


export async function displayWeather(data) {
  const weatherDisplay = document.querySelector("div.weather-display");
  weatherDisplay.innerHTML = ""; // clear any previous weather or error messages

  const convertTempBtn = document.querySelector("button.change-scale");
  convertTempBtn.classList.remove("hidden");
  const mode = convertTempBtn.dataset.scale;

  weatherDisplay.appendChild(getCurrentWeatherElement(data.currentConditions, mode));

  // Need to append display weather container to DOM first, so that it's 
  // properties(scrollLeft, offsetEdith, etc...) return accurate values
  const dailyForecastContainer = getDailyForecastElement(data.days, mode);
  weatherDisplay.appendChild(dailyForecastContainer);
  appendScrollBtns(dailyForecastContainer);
}
