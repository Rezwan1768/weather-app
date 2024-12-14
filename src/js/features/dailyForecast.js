import { createElement } from "../utils/util.js"
import { createTempSpan } from "../utils/temp.js";
import { getConditionImg } from "../components/cloudImg.js";
import { addForecastClickEvent } from "../components/dailyForecast/addForecasClickEvent.js";
import { getCurrentTempScale } from "../utils/temp.js";
export function getDailyForecast(days, currentWeatherParams) {
    const tempScale = getCurrentTempScale();
    // forecastDisplay is the container for all daily forecasts
    const forecastDisplay = createElement("div", "daily-forecast");
    for (let [index, day] of days.entries()) {
        const forecast = getForecastElem(day, tempScale);
        addForecastClickEvent(forecast, day, index, currentWeatherParams)
        forecastDisplay.appendChild(forecast);
    }

    // Need an enclosing contianer to properly position the scroll buttons
    const container = createElement("div", "forecast-container");
    container.appendChild(forecastDisplay);
    return container;
}

// Returns a div with weather data for a specefic day
function getForecastElem({ tempmax, tempmin, conditions }, tempScale) {
    const condition = getConditionImg(conditions.split(",")[0]);
    const temp = getTempElem(tempmax, tempmin, tempScale);

    // Each forecast is made into button, 
    // They will display more info on click
    const forecastContainer = createElement("button", "forecast");
    forecastContainer.append(condition, temp);
    // addClickEvent(forecastContainer, day, index, tempScale);
    return forecastContainer;
}

// Returns a div with high and low temp
function getTempElem(tempmax, tempmin, tempScale) {
    const tempHigh = createElement("p", "temp-high");
    tempHigh.innerHTML = `${createTempSpan(tempmax, tempScale)}`;
    const tempLow = createElement("p", "temp-low");
    tempLow.innerHTML = `${createTempSpan(tempmin, tempScale)}`;

    const tempContainer = createElement("div", "temp-container");
    tempContainer.append(tempHigh, tempLow);
    return tempContainer;
}
