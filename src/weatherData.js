export async function fetchWeatherData()  {
    // const baseUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
    // const url = `${baseUrl}/${encodeURIComponent(location)}?key=${apiKey}`;
    const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%20York%2CUSA?key=682SGPMVGMB6KGENKEFEAE8ZL", {mode : "cors"});
    const data = await response.json();
    return data;
}


