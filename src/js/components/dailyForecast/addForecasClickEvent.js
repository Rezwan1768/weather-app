import { getCurrentWeather } from "../../features/currentWeather";
import { getCurrentTempScale } from "../../utils/temp";
import { getForecastInfo } from "./forecastDetail";

// Used to add click event ot each forecast buttons
export function addForecastClickEvent(elem, day, index, currentWeatherParams) {
  const displayContainer = document.querySelector(".weather-display");

  elem.addEventListener("click", () => {
    // get the current scale being used, to prevent shifts in temperature scale
    let tempScale = getCurrentTempScale();
    displayContainer.innerHTML = "";
    // Show current weather if todays forecast button is cliked
    if (index === 0) {
      displayContainer.appendChild(
        getCurrentWeather(currentWeatherParams, tempScale),
      );
      return;
    }
    // Otherwise show detailed weather info of the cliked forecast
    const location = currentWeatherParams.location;
    const timezone = currentWeatherParams.timezone;
    displayContainer.appendChild(
      getForecastInfo(day, location, timezone, tempScale),
    );
  });
}
