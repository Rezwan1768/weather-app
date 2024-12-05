import clouds from "../../images/clouds.svg";
import partialCloud from "../../images/partiallyCloudy.svg";
import rain from "../../images/rain.svg";
import sun from "../../images/sun.svg";
import { createImgElement } from "./util.js";

// Returns an img element based on the description of the image
export function getConditionImg(condition) {
    switch (condition.toLowerCase()) {
        case "rain": return createImgElement(rain, "Rainy");
        case "clear": return createImgElement(sun, "Sunny");
        case "overcast": return createImgElement(clouds, "Cloudy");
        case "partially cloudy":
        default:
            return createImgElement(partialCloud, "Partially Cloudy");
    }
}

export function createTempSpan(temp, mode) {
    let tempValue = temp;
    let unit = "°F";

    // Convert weather and unit to clesius if current mode is set to "celsius"
    // Fahrnehiet is the default scale
    if (mode === "celsius") {
        tempValue = fahrenheitToCelsius(temp);
        unit = "°C"
    }
    // return createElement("span", "temp", `${Math.round(temp)}${unit}`);
    return `<span class="temp">${Math.round(tempValue)}${unit}</span>`
}

export function fahrenheitToCelsius(temp) {
    return Math.round((temp - 32) * 5 / 9);
}

export function celsiusTofahrenheit(temp) {
    return Math.round(temp * 9 / 5 + 32);
}