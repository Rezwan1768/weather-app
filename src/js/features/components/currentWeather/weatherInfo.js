import { createElement } from "../../../utils/util";
import { getConditionImg } from "../../../utils/temp";
import { getTempCloudElem } from "./tempCloudInfo";
import { getConditionsElem } from "./conditions";

export function getWeatherInfo(currentCond, mode) {
  const cloudCondImg = getCloudCondImg(currentCond.conditions);
  const tempCloudCont = getTempCloudElem(currentCond, mode);
  const otherConditions = getConditionsElem(currentCond, mode);

  const weatherInfo = createElement("div", "weather-info");
  weatherInfo.append(cloudCondImg, tempCloudCont, otherConditions);
  return weatherInfo;
}

function getCloudCondImg(conditions) {
  const container = createElement("div", "cloud-img");
  container.appendChild(getConditionImg(conditions.split(",")[0]));
  return container;
}



