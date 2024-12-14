import { createElement } from "../../utils/util";
import { celsiusTofahrenheit, fahrenheitToCelsius } from "../../utils/temp";
export function createChangeScaleBtn(mode) {
    const btn = createElement("button", "change-scale");
    // The content is the sacale that will be changed to next on click
    btn.textContent = mode === "c" ? "°F" : "°C";
    btn.dataset.scale = mode === "c" ? "c" : "f";
    btn.addEventListener("click", clickHandler);
    return btn;
}


function clickHandler(event) {
    const btn = event.currentTarget;
    const temps = document.querySelectorAll("span.temp"); // get all the temps
    const isCelsius = btn.dataset.scale === "c"; // button state currently
    // Update button state
    btn.dataset.scale = isCelsius ? "f" : "c"; // change btn state
    btn.textContent = isCelsius ? "°C" : "°F" ; // the next scale

    // Convert the temperatures
    temps.forEach(temp => {
        const tempValue = parseInt(temp.textContent);
        const newTemp = isCelsius ? celsiusTofahrenheit(tempValue) : fahrenheitToCelsius(tempValue);
        const unit = isCelsius ? "°F" : "°C";
        temp.textContent = `${newTemp}${unit}`;
    });
}

