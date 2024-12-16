import { createElement } from "../utils/util";
import { createTempSpan } from "../utils/temp";

// Returns a container with other weather condtitions, such as humidty, dew, etc...
export function getConditionsElem({ precipprob, humidity, dew, windspeed }, tempScale) {
  const precip = createElement("p", "", `Precipitation: ${Math.round(precipprob)}%`);
  const humidityPercent = createElement("p", "", `Humidity: ${Math.round(humidity)}%`);
  const wind = createElement("p", "", `Wind speed: ${Math.round(windspeed)}mph`);
  const dewpoint = createElement("p");
  dewpoint.innerHTML = `Dew: ${createTempSpan(dew, tempScale)}`;

  const conditions = createElement("div", "other-conditions");
  conditions.append(precip, humidityPercent, wind, dewpoint);
  return conditions;
}