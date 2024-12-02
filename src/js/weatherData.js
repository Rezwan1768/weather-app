export async function fetchWeatherData(location) {
  const apiKey = "682SGPMVGMB6KGENKEFEAE8ZL";
  const baseUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
  const url = `${baseUrl}/${encodeURIComponent(location)}?key=${apiKey}`;
  const response = await fetch( url, { mode: "cors" });
  const data = await response.json();
  return data;
}


//     "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%20York%2CUSA?key=682SGPMVGMB6KGENKEFEAE8ZL",
