export function createTempSpan(temp, mode) {
    let tempValue = temp;
    let unit = "°F";

    // Convert weather and unit to clesius if current mode is set to "celsius"
    // Fahrnehiet is the default scale
    if (mode === "c") {
        tempValue = fahrenheitToCelsius(temp);
        unit = "°C"
    }
    // return createElement("span", "temp", `${Math.round(temp)}${unit}`);
    return `<span class="temp">${Math.round(tempValue)}${unit}</span>`
}


export function getCurrentTempScale() {
    let tempScale = 'f';
    const chagneScaleBtn = document.querySelector("button.change-scale");
    if (chagneScaleBtn) {
        tempScale = chagneScaleBtn.dataset.scale;
    }
    return tempScale;
}

export function fahrenheitToCelsius(temp) {
    return Math.round((temp - 32) * 5 / 9);
}

export function celsiusTofahrenheit(temp) {
    return Math.round(temp * 9 / 5 + 32);
}