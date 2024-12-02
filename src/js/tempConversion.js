

export function convertTemp(event) {
    const btn = event.currentTarget;
    const temps = document.querySelectorAll("span.temp");
    const isCelsius = btn.dataset.scale === "celsius";

    // Update button 
    btn.dataset.scale = isCelsius ? "fahrenheit" : "celsius";
    btn.textContent = isCelsius ? "Celsius" : "Fahrenheit";
    
     // Convert temperatures
     temps.forEach(temp => {
        const tempValue = parseInt(temp.textContent); 
        const newTemp = isCelsius ? celsiusTofahrenheit(tempValue) : fahrenheitToCelsius(tempValue);
        const unit = isCelsius ? "°F" : "°C";
        temp.textContent = `${newTemp}${unit}`;
    });
}

function fahrenheitToCelsius(temp) {
    return Math.round((temp - 32) * 5 / 9);
}

function celsiusTofahrenheit(temp) {
    return Math.round(temp * 9 / 5 + 32);
}