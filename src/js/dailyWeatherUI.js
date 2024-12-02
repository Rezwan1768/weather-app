import {
    createElement,
    createTempSpan,
    getConditionImg,
} from "./util"


export function getDailyForecastElement(days) {
    // stores the weather for each day
    const forecastDisplayContiner = createElement("div", "daily-forecast");
    for (let day of days) {
        forecastDisplayContiner.appendChild(getForecastElement(day));
    }

    const dailyForecast = createElement("div", "forecast-container");
    dailyForecast.appendChild(forecastDisplayContiner);
    return dailyForecast;
}



// Returns a div with weather data for a specefic day
function getForecastElement({ tempmax, tempmin, conditions, datetime = "" }) {
    const forecastContainer = createElement("button", "forecast");
    const conditionElement = getConditionElement(conditions);
    const tempElement = getTempElement(tempmax, tempmin);
    forecastContainer.append(conditionElement, tempElement);
    return forecastContainer;
}

function getConditionElement(conditions) {
    // Sometimes there can be multiple conditions, in that case just use the first one
    if (conditions) return getConditionImg(conditions.split(",")[0]);
}

// Returns a div with high and low temp
function getTempElement(tempHigh, tempLow) {
    const tempContainer = createElement("div", "temp-highlow");
    const tempHighElement = createElement("p", "temp-high");
    tempHighElement.innerHTML = `High: ${createTempSpan(tempHigh)}`;
    const tempLowElement = createElement("p", "temp-low");
    tempLowElement.innerHTML = `Low: ${createTempSpan(tempLow)}`;
    tempContainer.append(tempHighElement, tempLowElement);
    return tempContainer;
}
