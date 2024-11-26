import { createElement, createImgElement } from "./util";
import clouds from "./images/clouds.svg";

export function weatherEachDay(days) {
    const weathers = [];
    for(let day of days) {
        let dailyWeather = getWeather(day);
        console.log(dailyWeather);
        weathers.push(dailyWeather);
    }
    return weathers;
}

function getWeather({tempmax, tempmin, conditions, datetime = ""}) {
    const dailyWeatherContainer = createElement("button", "weather-container");
    const forecastImg = forecast(conditions);
    const tempContainer = tempHighAndLow(tempmax, tempmin);
    dailyWeatherContainer.append(forecastImg, tempContainer);

    return dailyWeatherContainer;
}

function forecast(conditions) {
    if(conditions) return createImgElement(clouds);
}

function tempHighAndLow(tempHigh, tempLow) {
    const tempContainer = createElement("div", "temp-highlow");
    const tempHighElement = createElement("p", "", `High: ${tempHigh}°`);
    const tempLowElement = createElement("p", "", `Low: ${tempLow}°`);
    tempContainer.append(tempHighElement, tempLowElement);
    return tempContainer;
}
