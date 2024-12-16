export function createTempSpan(temp, scale) {
    let tempValue = temp;
    let unit = "°F";

    // Convert weather and unit to clesius if current scale is set to celsius
    // Fahrnehiet is the default scale
    if (scale === "c") {
        tempValue = fahrenheitToCelsius(temp);
        unit = "°C"
    }
    // return createElement("span", "temp", `${Math.round(temp)}${unit}`);
    return `<span class="temp">${Math.round(tempValue)}${unit}</span>`
}


let tempScale = 'f';
export function updateTempScale(scale) {
    tempScale = scale;
}

export function getCurrentTempScale() {
    return tempScale;
}

export function fahrenheitToCelsius(temp) {
    return Math.round((temp - 32) * 5 / 9);
}

export function celsiusTofahrenheit(temp) {
    return Math.round(temp * 9 / 5 + 32);
}