import clouds from "../images/clouds.svg";
import partialCloud from "../images/partially-cloudy.svg";
import rain from "../images/rain.svg";
import sun from "../images/sun.svg";

export function createElement(element, className = "", textContent = "") {
  const elem = document.createElement(element);
  if (className) elem.className = className;
  if (textContent) elem.textContent = textContent;
  return elem;
}

export function createImgElement(src, alt = "", width = "80", height = "80") {
  const img = new Image(width, height);
  img.src = src;
  img.alt = alt;
  return img;
}

export function getConditionImg(condition) {
  switch (condition.toLowerCase()) {
    case "rain": return createImgElement(rain, "Rainy");
    case "clear": return createImgElement(sun, "Sunny");
    case "overcast": return createImgElement(clouds, "Cloudy");
    case "partially cloudy":
    default:
      return createImgElement(partialCloud, "Partially Cloudy");
  }
}

export function createTempSpan(temp) {
  return `<span class="temp">${Math.round(temp)}°F</span>`
}