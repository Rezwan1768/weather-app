import { fetchWeatherData } from "./weatherData.js";
import { createElement, createImgElement } from "./util.js";
import clouds from "../images/clouds.svg";

export async function displayWeather() {
    const data = await fetchWeatherData();
    console.log(data);
    const displayContainer = document.querySelector("div.display");
    const [weather, conditions] = currentWeather(data.currentConditions);
    displayContainer.append(weather, conditions);
}

function currentWeather(data) {
    const weatherContainer = createElement("div", "weather-now");
    const forecast = currentForecast(data);
    const temp = currentTemp(data);
    weatherContainer.append(forecast, temp);

    const conditionContainer = createElement("div", "condtions-now");
    const condition = currentConditions(data);
    conditionContainer.appendChild(condition);
    return [weatherContainer, conditionContainer];

}

function currentTemp({temp, feelslike}) {
    const tempContainer = createElement("div", "current-temp");
    const tempElement = createElement("p", "temp-now", temp);
    const feelslikeElement = createElement("p", "feelslike-now", `Feels like: ${feelslike}`);
    tempContainer.append(tempElement, feelslikeElement);
    return tempContainer;
}

function currentForecast({conditions}) {
    const forecastContainer = createElement("div", "forecast");
    const conditionImg = createImgElement(clouds);
    const conditionElement = createElement("p","", conditions);
    forecastContainer.append(conditionImg, conditionElement);
    return forecastContainer;
}

function currentConditions({precipprob, humidity}) {
    const conditionsContainer = createElement("div", "conditions");
    const precipprobElement = createElement("p", "", `Precipation: ${precipprob}%`);
    const humidityElement = createElement("p", "", `Humidity: ${humidity}%`);
    conditionsContainer.append(precipprobElement, humidityElement);
    return conditionsContainer;
}