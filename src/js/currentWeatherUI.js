import { createElement, createTempSpan, getConditionImg } from "./util.js";
import "../styles/weatherDisplay.css";

// Returns a diiv containing all the current weather information(forecast, temp, and conditions)
export function getCurrentWeatherElement({
  temp,
  feelslike,
  conditions,
  precipprob,
  humidity,
  dew, 
  windspeed
}, mode) {
  const cloudCondElement = getCurrentCloudCondition(conditions);
  const tempElement = getCurrentTempElement(temp, feelslike, mode);
  const conditionElement = getCurrentConditionsElement(precipprob, humidity,dew, windspeed);

  // I want forecast and temp to be next to each other
  const tempAndCloudElement = createElement("div", "temp-cloud");
  tempAndCloudElement.append(cloudCondElement, tempElement);

  const weatherContainer = createElement("div", "current-weather");
  weatherContainer.append(tempAndCloudElement, conditionElement);
  return weatherContainer;
}

// Returns an img and description of the cloud condition
function getCurrentCloudCondition(conditions) {
  const cloudImg = getConditionImg(conditions.split(",")[0]);
  const cloudElement = createElement("p", "", conditions);

  const cloudCondContainer = createElement("div", "cloud-container");
  cloudCondContainer.append(cloudImg, cloudElement);
  return cloudCondContainer;
}

// Returns a div with current temp and feelslike
function getCurrentTempElement(temp, feelslike, mode) {
  const tempContainer = createElement("div", "temp-container");
  const tempElement = createElement("p", "temp-now");
  tempElement.innerHTML = `${createTempSpan(temp, mode)}`

  const feelslikeElement = createElement("p","feelslike-now");
  feelslikeElement.innerHTML=`Feels Like: ${createTempSpan(feelslike, mode)}`;
  tempContainer.append(tempElement, feelslikeElement);
  return tempContainer;
}

// Returns a div with current weather conditions
function getCurrentConditionsElement(precipprob, humidity, dew, windspeed) {
  const conditionsContainer = createElement("div", "conditions");
  const precipElement = createElement("p", "", `precipitation: ${Math.round(precipprob)}%`);
  const humidityElement = createElement("p", "", `Humidity: ${Math.round(humidity)}%`);
  const dewElement = createElement("p");
  dewElement.innerHTML = `Dew: ${createTempSpan(dew)}`;
  const windElement = createElement("p", "", `Wind speed: ${Math.round(windspeed)}mph`);
  conditionsContainer.append(precipElement, humidityElement, dewElement, windElement);
  return conditionsContainer;
}
