import {
  createElement,
  getLocationElem,
  getLocalTime,
  getLocalDate,
} from "../../utils/util";

export function getDatetimeLocationElem(location, timezone) {
  const container = createElement("div", "date-location");
  const place = getLocationElem(location);
  const datetme = getDatetimeElem(timezone);
  container.append(place, datetme);
  return container;
}

function getDatetimeElem(timezone) {
  const date = createElement("p", "date", `${getLocalDate(timezone)}, `);
  const time = createElement("p", "time", `${getLocalTime(timezone)}`);
  const datetime = createElement("div", "datetime");
  datetime.append(date, time);
  return datetime;
}
