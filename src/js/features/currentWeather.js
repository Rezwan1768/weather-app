import { createElement } from "../utils/util.js";
import { getDatetimeLocationElem } from "../components/currentWeather/datetimeLocation.js";
import { getWeatherInfo } from "../components/currentWeather/weatherInfo.js";

export function getCurrentWeather({ currentCond, timezone, location}, tempScale) {
  const datetmeAndLocation = getDatetimeLocationElem(location, timezone);
  const weatherInfo = getWeatherInfo(currentCond, tempScale);
  const weatherContainer = createElement("div", "forecast-detail");
  weatherContainer.append(datetmeAndLocation, weatherInfo);
  return weatherContainer;
}

