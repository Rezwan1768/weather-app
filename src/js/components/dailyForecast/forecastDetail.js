import { createElement, getLocationElem, getLocalDate } from "../../utils/util";
import { getConditionImg } from "../cloudImg";
import { getConditionsElem } from "../otherConditions";
import { createTempSpan } from "../../utils/temp";
import { getCloudConditionText } from "../cloudCondition";
import { createChangeScaleBtn } from "../tempConvertBtn";

export function getForecastInfo(day, location, timezone, tempScale) {
    const container = createElement("div", "forecast-detail");
    const dateLocation = getLocationAndDate(day.datetime, location, timezone);
    const forecastInfo = getForecastDetail(day, tempScale);
    container.append(dateLocation, forecastInfo);
    return container;
}

function getLocationAndDate(dateString, location, timeZone) {
    const place = getLocationElem(location);
    const date = getLocalDate(timeZone, dateString);
    const dateElem = createElement("p", "date", date);
    const dateLocation = createElement("div", "date-location");
    dateLocation.append(place, dateElem);
    return dateLocation;
}

function getForecastDetail(day, tempScale) {
    const imgContainer = createElement("div", "cloud-img");
    imgContainer.append(getConditionImg(day.conditions.split(",")[0]));
    const temperature = getTempElem(day.tempmax, day.tempmin, day.conditions, tempScale);
    const otherCondtions = getConditionsElem(day, tempScale);

    const container = createElement("div", "weather-info");
    container.append(imgContainer, temperature, otherCondtions);
    return container;
}

function getTempElem(high, low, conditions, tempScale) {
    const tempContainer = createElement("div", "day-temp");
    tempContainer.innerHTML = `
        <div class="high-low">
            <p>High: ${createTempSpan(high, tempScale)}</P
            <p>Low: ${createTempSpan(low, tempScale)}</p>
        </div>
    `;
    const chagneScaleBtn = createChangeScaleBtn(tempScale);
    tempContainer.appendChild(chagneScaleBtn);
    const cloudCondition = getCloudConditionText(conditions);

    const container = createElement("div", "temp-cloud");
    container.append(tempContainer, cloudCondition);
    return container;
}


