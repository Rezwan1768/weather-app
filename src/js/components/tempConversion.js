import { celsiusTofahrenheit, fahrenheitToCelsius } from "../utils/temp";

export function convertTemp(event) {
    const btn = event.currentTarget;
    const temps = document.querySelectorAll("span.temp"); // get all the temps
    const isCelsius = btn.dataset.scale === "celsius";

    // Update button state
    btn.dataset.scale = isCelsius ? "fahrenheit" : "celsius";
    btn.textContent = isCelsius ? "Celsius" : "Fahrenheit";
    
     // Convert the temperatures
     temps.forEach(temp => {
        const tempValue = parseInt(temp.textContent); 
        const newTemp = isCelsius ? celsiusTofahrenheit(tempValue) : fahrenheitToCelsius(tempValue);
        const unit = isCelsius ? "°F" : "°C";
        temp.textContent = `${newTemp}${unit}`;
    });
}

