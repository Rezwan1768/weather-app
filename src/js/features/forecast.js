import { createElement } from "../utils/util.js"
import { createTempSpan, getConditionImg } from "../utils/temp.js";

export function getDailyForecastElement(days, mode) {
    // stores the weather for each day
    const forecastDisplay = createElement("div", "daily-forecast");
    for (let [index, day] of days.entries()) {
        forecastDisplay.appendChild(getForecastElem(day,index, mode));
    }

    const container = createElement("div", "forecast-container");
    container.appendChild(forecastDisplay);
    return container;
}

// Returns a div with weather data for a specefic day
function getForecastElem(day, index, mode) {
    const condition = getConditionImg(day.conditions.split(",")[0]);
    const temp = getTempElem(day.tempmax, day.tempmin, mode);

    const forecastContainer = createElement("button", "forecast");
    forecastContainer.append(condition, temp);
    return forecastContainer;
}

// Returns a div with high and low temp
function getTempElem(tempmax, tempmin, mode) {
    const tempHigh = createElement("p", "temp-high");
    tempHigh.innerHTML = `High: ${createTempSpan(tempmax, mode)}`;
    const tempLow = createElement("p", "temp-low");
    tempLow.innerHTML = `Low: ${createTempSpan(tempmin, mode)}`;

    const tempContainer = createElement("div", "temp-highlow");
    tempContainer.append(tempHigh, tempLow);
    return tempContainer;
}
