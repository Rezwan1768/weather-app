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

// Returns a string
export function getLocalDate(timezone) {
  const options = {
    timeZone: timezone, 
    weekday: 'long',
    // year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return new Date().toLocaleDateString("en-US", options);
}

export function getLocalTime(timezone) {
  const options = {
    timeZone: timezone, 
    hour: "numeric",
    minute: "numeric",
  }
  return new Date().toLocaleTimeString("en-US", options);
}