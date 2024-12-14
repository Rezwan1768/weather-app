import { createElement } from "../../utils/util";
import { getConditionImg } from "../cloudImg";
import { getConditionsElem } from "../otherConditions";
import { getLocationElem } from "../../utils/util";
import { createTempSpan } from "../../utils/temp";
import { getLocalDate } from "../../utils/util";

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
    console.log(dateString);
    console.log(timeZone);
    console.log(date);
    const dateElem = createElement("p", "date", date);
    const dateLocation = createElement("div", "date-location");
    dateLocation.append(place, dateElem);
    return dateLocation;
}

function getForecastDetail(day, tempScale) {
    const imgContainer = createElement("div", "cloud-img");
    imgContainer.append(getConditionImg(day.conditions.split(",")[0]));
    const temperature = getTempElem(day.tempmax, day.tempmin, tempScale);
    const otherCondtions = getConditionsElem(day);

    const container = createElement("div", "weather-info");
    container.append(imgContainer, temperature, otherCondtions);
    return container;
}

function getTempElem(high, low, tempScale) {
    const tempHigh = createElement("p", "high");
    tempHigh.innerHTML = `High: ${createTempSpan(high, tempScale)}`;
    const tempLow = createElement("p", "low");
    tempLow.innerHTML = `Low: ${createTempSpan(low, tempScale)}`;

    const container = createElement("div", "temp-container");
    container.append(tempHigh, tempLow);
    return container;
}

