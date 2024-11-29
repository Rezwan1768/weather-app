import { createElement, getConditionImg } from "./util.js";
import clouds from "./images/clouds.svg";
import "./styles/weatherDisplay.css";

// Returns a diiv containing all the current weather information(forecast, temp, and conditions)
export function getCurrentWeatherElement({
  temp,
  feelslike,
  conditions,
  precipprob,
  humidity,
}) {
  const forecastElement = getCurrentForecastElement(conditions);
  const tempElement = getCurrentTempElement(temp, feelslike);
  const conditionElement = getCurrentConditionsElement(precipprob, humidity);

  // I want forecast and temp to be next to each other
  const forecastAndTempContainer = createElement("div", "temp-forecast");
  forecastAndTempContainer.append(forecastElement, tempElement);

  const weatherContainer = createElement("div", "current-weather");
  weatherContainer.append(forecastAndTempContainer, conditionElement);
  return weatherContainer;
}

// Returns a div with the forecast and a forecast image
function getCurrentForecastElement(conditions) {
  const forecastContainer = createElement("div", "forecast-container");
  const forecastImg = getConditionImg(conditions.split(",")[0]);
  const forecastElement = createElement("p", "", conditions);
  forecastContainer.append(forecastImg, forecastElement);
  return forecastContainer;
}

// Returns a div with current temp and feelslike
function getCurrentTempElement(temp, feelslike) {
  const tempContainer = createElement("div", "temp-container");
  const tempElement = createElement("p", "temp-now", `${Math.round(temp)}°`);
  const feelslikeElement = createElement(
    "p",
    "feelslike-now",
    `Feels like: ${Math.round(feelslike)}°`,
  );
  tempContainer.append(tempElement, feelslikeElement);
  return tempContainer;
}

// Returns a div with current weather conditions
function getCurrentConditionsElement(precipprob, humidity) {
  const conditionsContainer = createElement("div", "conditions");
  const precipElement = createElement("p", "", `precipitation: ${precipprob}%`);
  const humidityElement = createElement("p", "", `Humidity: ${humidity}%`);
  conditionsContainer.append(precipElement, humidityElement);
  return conditionsContainer;
}
