import { createElement, createImgElement } from "./util.js";
import clouds from "../images/clouds.svg";

export function currentWeather({temp, feelslike, conditions, precipprob, humidity}) {
    const forecastContainer = currentForecast(conditions);
    const tempContainer = currentTemp(temp, feelslike);
    const conditionContainer = currentConditions(precipprob, humidity);

    const forecastAndTempContainer = createElement("div", "weather-now");
    forecastAndTempContainer.append(forecastContainer, tempContainer);
    
    const weatherContainer = createElement("div", "current-weather");
    weatherContainer.append(forecastAndTempContainer, conditionContainer);
    return weatherContainer;
}

function currentForecast({conditions}) {
    const forecastContainer = createElement("div", "forecast");
    const forecastImg = createImgElement(clouds);
    const forecastElement = createElement("p","", conditions);
    forecastContainer.append(forecastImg, forecastElement);
    return forecastContainer;
}

function currentTemp({temp, feelslike}) {
    const tempContainer = createElement("div", "temp-container");
    const tempElement = createElement("p", "temp-now", temp);
    const feelslikeElement = createElement("p", "feelslike-now", `Feels like: ${feelslike}`);
    tempContainer.append(tempElement, feelslikeElement);
    return tempContainer;
}

function currentConditions({precipprob, humidity}) {
    const conditionsContainer = createElement("div", "conditions");
    const precipprobElement = createElement("p", "", `Precipation: ${precipprob}%`);
    const humidityElement = createElement("p", "", `Humidity: ${humidity}%`);
    conditionsContainer.append(precipprobElement, humidityElement);
    return conditionsContainer;
}