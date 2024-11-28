import {
    createElement,
    createImgElement,
} from "./util"
import clouds from "./images/clouds.svg";

export function getDailyWeatherElement(days) {
    // stores the weather for each day
    const weatherDisplayContiner = createElement("div", "weather-display");
    for (let day of days) {
        weatherDisplayContiner.appendChild(getWeatherElement(day));
    }

    const [prevBtn, nextBtn] = createScrollButtons(weatherDisplayContiner);
    const dailyWeathercontainer = createElement("div", "daily-weather");
    dailyWeathercontainer.append(prevBtn, weatherDisplayContiner, nextBtn);
    return dailyWeathercontainer;
}

function createScrollButtons(weatherDisplay) {
    const prevBtn = createElement("button", "prev");
    const nextBtn = createElement("button", "next");
    prevBtn.innerHTML = "&#10094;";
    nextBtn.innerHTML = "&#10095;";

    // To calcualte the width of dynamic element on the DOM
    const getOffsetWidth = (element) => element.offsetWidth;

    // Get a single weather container, will be used to claculate the amount (width) to scroll
    const weatherContainer = weatherDisplay.querySelector(".weather-container");

    // The prev button is disabeld initally
    if (weatherDisplay.scrollLeft === 0) prevBtn.disabled = true;

    prevBtn.addEventListener("click", () => {
        if (nextBtn.disabled) nextBtn.disabled = false;

        weatherDisplay.scrollBy({
            left: -getOffsetWidth(weatherContainer) * 5,
            behavior: "smooth",
        });

        // Use setTimeout to wait for the scroll animation to complete
        setTimeout(() => {
            if (weatherDisplay.scrollLeft === 0) {
                prevBtn.disabled = true;
            }
        }, 300);
    });

    nextBtn.addEventListener("click", () => {
        if (prevBtn.disabled) prevBtn.disabled = false;

        weatherDisplay.scrollBy({
            left: getOffsetWidth(weatherContainer) * 5,
            behavior: "smooth",
        });

        // Use setTimeout to wait for the scroll animation to complete
        setTimeout(() => {
            if (weatherDisplay.scrollLeft + weatherDisplay.offsetWidth >= weatherDisplay.scrollWidth) {
                nextBtn.disabled = true;
            }
        }, 300);

    })
    return [prevBtn, nextBtn];
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
    if (conditions) return createImgElement(clouds);
}

// Returns a div with high and low temp
function getTempElement(tempHigh, tempLow) {
    const tempContainer = createElement("div", "temp-highlow");
    const tempHighElement = createElement("p", "", `High: ${tempHigh}°`);
    const tempLowElement = createElement("p", "", `Low: ${tempLow}°`);
    tempContainer.append(tempHighElement, tempLowElement);
    return tempContainer;
}
