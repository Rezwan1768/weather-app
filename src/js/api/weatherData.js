export async function fetchWeatherData(lat, long) {
  const apiKey = "682SGPMVGMB6KGENKEFEAE8ZL";
  const baseUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
  const url = `${baseUrl}/${lat},${long}?key=${apiKey}`;
  try {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

