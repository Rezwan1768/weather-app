import {
    createElement,
    getConditionImg,
} from "./util"
import clouds from "./images/clouds.svg";

export function getDailyWeatherElement(days) {
    // stores the weather for each day
    const weatherDisplayContiner = createElement("div", "weather-display");
    for (let day of days) {
        weatherDisplayContiner.appendChild(getWeatherElement(day));
    }

    const dailyWeathercontainer = createElement("div", "daily-weather");
    dailyWeathercontainer.appendChild(weatherDisplayContiner);
    return dailyWeathercontainer;
}



// Returns a div with weather data for a specefic day
function getWeatherElement({ tempmax, tempmin, conditions, datetime = "" }) {
    const weatherContainer = createElement("button", "weather-container");
    const forecastElement = getForecastElem(conditions);
    const tempElement = getTempElement(tempmax, tempmin);
    weatherContainer.append(forecastElement, tempElement);
    return weatherContainer;
}

function getForecastElem(conditions) {
    // Sometimes there can be multiple conditions, in that case just use the first one
    if (conditions) return getConditionImg(conditions.split(",")[0]);
}

// Returns a div with high and low temp
function getTempElement(tempHigh, tempLow) {
    const tempContainer = createElement("div", "temp-highlow");
    const tempHighElement = createElement("p", "", `High: ${Math.round(tempHigh)}°`);
    const tempLowElement = createElement("p", "", `Low: ${Math.round(tempLow)}°`);
    tempContainer.append(tempHighElement, tempLowElement);
    return tempContainer;
}
