import { createElement, createImgElement } from "./util.js";
import clouds from "./images/clouds.svg";
import "./styles/weatherDisplay.css";


export function currentWeather({temp, feelslike, conditions, precipprob, humidity}) {
    const forecastContainer = currentForecast(conditions);
    const tempContainer = currentTemp(temp, feelslike);
    const conditionContainer = currentConditions(precipprob, humidity);

    const forecastAndTempContainer = createElement("div", "temp-forecast");
    forecastAndTempContainer.append(forecastContainer, tempContainer);
    
    // const weatherContainer = createElement("div", "current-weather");
    // weatherContainer.append(forecastAndTempContainer, conditionContainer);
    return [forecastAndTempContainer, conditionContainer];
}

function currentForecast(conditions) {
    const forecastContainer = createElement("div", "forecast-container");
    const forecastImg = createImgElement(clouds);
    const forecastElement = createElement("p","", conditions);
    forecastContainer.append(forecastImg, forecastElement);
    return forecastContainer;
}

function currentTemp(temp, feelslike) {
    const tempContainer = createElement("div", "temp-container");
    const tempElement = createElement("p", "temp-now", `${Math.round(temp)}°`);
    const feelslikeElement = createElement("p", "feelslike-now", `Feels like: ${Math.round(feelslike)}°`);
    tempContainer.append(tempElement, feelslikeElement);
    return tempContainer;
}

function currentConditions(precipprob, humidity) {
    const conditionsContainer = createElement("div", "conditions");
    const precipprobElement = createElement("p", "", `Precipation: ${precipprob}%`);
    const humidityElement = createElement("p", "", `Humidity: ${humidity}%`);
    conditionsContainer.append(precipprobElement, humidityElement);
    return conditionsContainer;
}