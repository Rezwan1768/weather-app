import { createElement } from "../../utils/util";
import { getConditionImg } from "../cloudImg";
import { getCloudConditionText } from "../cloudCondition";
import { getConditionsElem } from "../otherConditions";
import { getTempElem } from "./temp";
import { getCurrentTempScale } from "../../utils/temp";

export function getWeatherInfo(currentCond) {
  const tempScale = getCurrentTempScale();
  const cloudCondImg = getCloudConditionImg(currentCond.conditions);
  const tempCloudCont = getTempAndCloudCond(currentCond, tempScale);
  const otherConditions = getConditionsElem(currentCond, tempScale);

  const weatherInfo = createElement("div", "weather-info");
  weatherInfo.append(cloudCondImg, tempCloudCont, otherConditions);
  return weatherInfo;
}

function getCloudConditionImg(conditions) {
  // Only get the image of the first condition
  const cloudImg = getConditionImg(conditions.split(",")[0]);
  const container = createElement("div", "cloud-img");
  container.append(cloudImg);
  return container;
}

export function getTempAndCloudCond({ temp, feelslike, conditions }, tempScale) {
  const tempElement = getTempElem(temp, feelslike, tempScale);
  const cloudCondition = getCloudConditionText(conditions);

  const container = createElement("div", "temp-cloud");
  container.append(tempElement, cloudCondition);
  return container;
}




