import { createElement } from "../utils/util.js";
import { getDatetimeLocationElem } from "../components/currentWeather/datetimeLocation.js";
import { getWeatherInfo } from "../components/currentWeather/weatherInfo.js";

export function getCurrentWeather({ currentCond, timezone, location}) {
  const datetmeAndLocation = getDatetimeLocationElem(location, timezone);
  const weatherInfo = getWeatherInfo(currentCond);
  const weatherContainer = createElement("div", "current-weather");
  weatherContainer.append(datetmeAndLocation, weatherInfo);
  return weatherContainer;
}

