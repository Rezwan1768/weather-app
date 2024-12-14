import { getCurrentWeather } from "../../features/currentWeather";
import { getCurrentTempScale } from "../../utils/temp";
import { getForecastInfo } from "./forecastDetail";

export function addForecastClickEvent(elem, day, index, currentWeatherParams) {
    const displayContainer = document.querySelector(".weather-display");

    elem.addEventListener("click", () => {
        let tempScale = getCurrentTempScale();
        displayContainer.innerHTML = "";
        if (index === 0) {
            displayContainer.appendChild(getCurrentWeather(currentWeatherParams, tempScale));
            return;
        }
        const location = currentWeatherParams.location;
        const timezone = currentWeatherParams.timezone;
        displayContainer.appendChild(getForecastInfo(day, location, timezone, tempScale))
    })
}