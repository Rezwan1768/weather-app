import { createElement } from "../../utils/util";
import { createTempSpan } from "../../utils/temp";
import { createChangeScaleBtn } from "../tempConvertBtn";

export function getTempElem(tempNow, feelslike, tempScale) {
  const currentTemp = createElement("p", "temp-now");
  currentTemp.innerHTML = `${createTempSpan(tempNow, tempScale)}`;
  const changeScaleBtn = createChangeScaleBtn(tempScale);

  const tempAndScale = createElement("div");
  tempAndScale.append(currentTemp, changeScaleBtn);

  const feelLikeTemp = createElement("p", "feelslike-now");
  feelLikeTemp.innerHTML = `Feels Like: ${createTempSpan(feelslike, tempScale)}`;

  const tempContainer = createElement("div", "temp-container");
  tempContainer.append(tempAndScale, feelLikeTemp);
  return tempContainer;
}
