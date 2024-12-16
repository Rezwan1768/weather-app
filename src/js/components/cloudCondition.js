import { createElement } from "../utils/util";

export function getCloudConditionText(conditions) {
  let count = 0;
  const cloudConditions = createElement("div", "cloud-condition");

  // There can be multiple cloud conditions,
  // Only get the frist 2 if there are too many
  for (let cond of conditions.split(",")) {
    const condElement = createElement("p", "", cond);
    cloudConditions.appendChild(condElement);
    count++;
    if (count === 2) break;
  }
  return cloudConditions;
}