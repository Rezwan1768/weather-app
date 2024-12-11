import { createElement } from "../../../utils/util";
import { createTempSpan } from "../../../utils/temp";

export function getTempCloudElem({ temp, feelslike, conditions }, mode) {
  const tempElement = getTempElem(temp, feelslike, mode);
  const cloudCondition = getCloudConditionElem(conditions);

  const container = createElement("div", "temp-cloud");
  container.append(tempElement, cloudCondition);
  return container;
}

function getTempElem(temp, feelslike, mode) {
  const tempElem = createElement("p", "temp-now");
  tempElem.innerHTML = `${createTempSpan(temp, mode)}`
  const feelsElem = createElement("p", "feelslike-now");
  feelsElem.innerHTML = `Feels Like: ${createTempSpan(feelslike, mode)}`;

  const tempContainer = createElement("div", "temp-container");
  tempContainer.append(tempElem, feelsElem);
  return tempContainer;
}

function getCloudConditionElem(conditions) {
  let count = 0;
  const cloudConditions = createElement("div", "cloud-condition");

  // There can be multiple cloud conditions,
  // Only get the frist 2 if there is too many
  for (let cond of conditions.split(",")) {
    const condElement = createElement("p", "", cond);
    cloudConditions.appendChild(condElement);
    count++;
    if (count === 2) break;
  }
  return cloudConditions;
}