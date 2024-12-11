import { createElement } from "../../../utils/util"
import { getCurrentWeatherElement } from "../../currentWeather";

export function addClickEvent(element, index) {
    const weatherDisplay = document.querySelector(".weather-display");
    element.addEventListener("click", () => {
        weatherDisplay.innerHTML = "";
        if (index === 0) {
            weatherDisplay.textContent = "YOU fool";
            return;
        }
        const container = createElement("div", "details");
        container.textContent = "Hello";

        weatherDisplay.appendChild(container);
    })
}