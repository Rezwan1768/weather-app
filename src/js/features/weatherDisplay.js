
import { getCurrentWeatherElement } from "../components/currentWeatherUI.js";
import { getDailyForecastElement } from "../components/dailyForecastUI.js";
import { appendScrollBtns } from "../components/scrollBtns.js";


export async function displayWeather(data) {
  const weatherDisplay = document.querySelector("div.weather-display");
  weatherDisplay.innerHTML = ""; // clear any previous weather or error messages

  // mode is used to determine if temperature should be displayed in F or C
  const convertTempBtn = document.querySelector("button.change-scale");
  const mode = convertTempBtn.dataset.scale;

  const currentWeather = getCurrentWeatherElement(data.currentConditions, mode)
  weatherDisplay.appendChild(currentWeather);

  // Need to append display weather container to DOM before the scroll buttons, 
  // so that it's properties(scrollLeft, offsetEdith, etc...) return accurate values
  const dailyForecastContainer = getDailyForecastElement(data.days, mode);
  weatherDisplay.appendChild(dailyForecastContainer);
  appendScrollBtns(dailyForecastContainer);
}
