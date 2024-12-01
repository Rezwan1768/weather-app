import { fetchWeatherData } from "./weatherData.js";
import { getCurrentWeatherElement } from "./currentWeatherUI.js";
import { getDailyWeatherElement } from "./dailyWeatherUI.js";
import { appendScrollBtns } from "./scrollBtns.js";
import { convertTemp } from "./tempConversion.js";

export async function displayWeather() {
  const data = await fetchWeatherData();
  console.log(data);

  document.body.appendChild(getCurrentWeatherElement(data.currentConditions));

  // Need to append display weather container to DOM first, so that it's 
  // properties(scrollLeft, offsetEdith, etc...) return accurate values
  const dailyWeathercontainer = getDailyWeatherElement(data.days);
  document.body.appendChild(dailyWeathercontainer);
  appendScrollBtns(dailyWeathercontainer);

  const convertTempBtn = document.querySelector("button.change-scale");
  convertTempBtn.addEventListener("click", convertTemp);
}
