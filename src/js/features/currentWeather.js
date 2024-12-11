import { createElement } from "../utils/util.js";
import { getDatetimeLocationElem } from "./components/currentWeather/datetimeLocation.js";
import { getWeatherInfo } from "./components/currentWeather/weatherInfo.js";

export function getCurrentWeatherElement( currentCond, timezone, location, mode) {
  const datetmeAndLocation = getDatetimeLocationElem(location, timezone);
  const weatherInfo = getWeatherInfo(currentCond, mode);
  const weatherContainer = createElement("div", "current-weather");
  weatherContainer.append(datetmeAndLocation, weatherInfo);
  return weatherContainer;
}

