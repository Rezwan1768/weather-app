import { createElement } from "../../../utils/util";
import { createTempSpan } from "../../../utils/temp";

export function getConditionsElem({ precipprob, humidity, dew, windspeed }, mode) {
  const precip = createElement("p", "", `Precipitation: ${Math.round(precipprob)}%`);
  const humidityPerc = createElement("p", "", `Humidity: ${Math.round(humidity)}%`);
  const wind = createElement("p", "", `Wind speed: ${Math.round(windspeed)}mph`);
  const dewpoint = createElement("p");
  dewpoint.innerHTML = `Dew: ${createTempSpan(dew, mode)}`;

  const conditions = createElement("div", "conditions");
  conditions.append(precip, humidityPerc, wind, dewpoint);
  return conditions;
}