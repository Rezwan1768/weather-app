import { createElement, createImgElement } from "./util.js";
import clouds from "../images/clouds.svg";


export function currentWeather(data) {
    const forecastContainer = currentForecast(data);
    const tempContainer = currentTemp(data);
    const forecastAndTempContainer = createElement("div", "weather-now");
    forecastAndTempContainer.append(forecastContainer, tempContainer);
    const conditionContainer = currentConditions(data);
    
    const weatherContainer = createElement("div", "current-weather");
    weatherContainer.append(forecastAndTempContainer, conditionContainer);
    return weatherContainer;
}

function currentTemp({temp, feelslike}) {
    const tempContainer = createElement("div", "temp-container");
    const tempElement = createElement("p", "temp-now", temp);
    const feelslikeElement = createElement("p", "feelslike-now", `Feels like: ${feelslike}`);
    tempContainer.append(tempElement, feelslikeElement);
    return tempContainer;
}

function currentForecast({conditions}) {
    const forecastContainer = createElement("div", "forecast");
    const forecastImg = createImgElement(clouds);
    const forecastElement = createElement("p","", conditions);
    forecastContainer.append(forecastImg, forecastElement);
    return forecastContainer;
}

function currentConditions({precipprob, humidity}) {
    const conditionsContainer = createElement("div", "conditions");
    const precipprobElement = createElement("p", "", `Precipation: ${precipprob}%`);
    const humidityElement = createElement("p", "", `Humidity: ${humidity}%`);
    conditionsContainer.append(precipprobElement, humidityElement);
    return conditionsContainer;
}