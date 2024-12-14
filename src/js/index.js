import { fetchWeatherData } from "./api/weatherData.js";
import { displayWeather } from "./features/displayWeather.js";
import { getCordinates } from "./api/locationData.js";
import "../styles/styles.css";
import "../styles/currentWeather.css";
import "../styles/dailyForecast.css";
import "../styles/weatherDisplay.css";
import { getLocalTime } from "./utils/util.js";
import { getCurrentTempScale } from "./utils/temp.js";

const searchBtn = document.querySelector(".search-btn");
const searchBox = document.querySelector("#search");

// Decided to leave the scale conversion button in HTML instead of creating it with JS.
// This is because the scale would go back to default (F), everytime it was rendered.
// const convertTempBtn = document.querySelector("button.change-scale");
// convertTempBtn.addEventListener("click", convertTemp);

searchBtn.addEventListener("click", async () => {
    if (searchBox.value.trim()) {
        const weatherDisplay = document.querySelector(".weather-container");
        let address = searchBox.value.trim();
        weatherDisplay.textContent = "Loading...";
        try {
            let addressData = await getCordinates(address);
            const [lat, long] = addressData.coordinates;
            if (!lat || !long) {
                throw new Error("Could not find this location. Make sure the address you entered is valid");
            }
            const weatherData = await fetchWeatherData(lat, long);
            if (!weatherData) {
                throw new Error("No weather data available for the given location.");
            }
            console.log(weatherData);
            console.log(getLocalTime(weatherData.timezone));
            // convertTempBtn.classList.remove("hidden");
            displayWeather(weatherData, addressData.location);
        } catch (error) {
            console.log(error);
            weatherDisplay.textContent = "Please enter a valid address.";
        }

    }
})



