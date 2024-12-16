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

// location is an object that may contain a city and/or a country
export function getLocationElem(location) {
  const locationParts = [];
  // Check to see if city/country exist in the locataion object
  if (location && location.city) locationParts.push(location.city);
  if (location && location.country) locationParts.push(location.country);
  return createElement("p", "location", `${locationParts.join(", ")}`);
}

// Returns a string
export function getLocalDate(timezone, dateString) {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: timezone,
  };

  // Add 'T00:00:00' to dateString to ensure the time is set to midnight.
  // This avoids timezone shifts when converting, as JavaScript Date objects default
  // to the UTC time zone, and a date like '2024-12-12' would be interpreted as
  // '2024-12-12T00:00:00' in UTC, which may shift depending on the target timezone.
  const date = dateString ? new Date(dateString + "T00:00:00") : new Date();

  // Format the date according to the provided timezone
  return date.toLocaleDateString("en-US", options);
}

export function getLocalTime(timezone) {
  const options = {
    timeZone: timezone,
    hour: "numeric",
    minute: "numeric",
  };
  return new Date().toLocaleTimeString("en-US", options);
}
