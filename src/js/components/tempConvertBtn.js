import { createElement } from "../utils/util";
import { celsiusTofahrenheit, fahrenheitToCelsius, updateTempScale } from "../utils/temp";

export function createChangeScaleBtn(tempScale) {
    const btn = createElement("button", "change-scale");
    btn.dataset.scale = tempScale === "c" ? "c" : "f";
    // text content is the scale that the scale would change to on click
    btn.textContent = tempScale === "c" ? "°F" : "°C";
    btn.addEventListener("click", clickHandler);
    return btn;
}

function clickHandler(event) {
    const btn = event.currentTarget;
    const temps = document.querySelectorAll("span.temp"); // get all the temps
    const isCelsius = btn.dataset.scale === "c";  // button scale currently

    // Update button state
    btn.dataset.scale = isCelsius ? "f" : "c"; // new scale after click
    btn.textContent = isCelsius ? "°C" : "°F"; // the next scale for text content
    // Also update the tempScale variable in utility.js
    updateTempScale(btn.dataset.scale);

    // Convert the temperatures based on the scale being used
    temps.forEach(temp => {
        const tempValue = parseInt(temp.textContent);
        const newTemp = isCelsius ? celsiusTofahrenheit(tempValue) : fahrenheitToCelsius(tempValue);
        const unit = isCelsius ? "°F" : "°C";
        temp.textContent = `${newTemp}${unit}`;
    });
}

