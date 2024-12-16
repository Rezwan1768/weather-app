import { fetchWeatherData } from "./api/weatherData.js";
import { displayWeather } from "./features/displayWeather.js";
import { getCordinates } from "./api/locationData.js";
import { createElement, getLocalTime } from "./utils/util.js";

import "../styles/styles.css";
import "../styles/weatherDisplay.css";
import "../styles/currentWeather.css";
import "../styles/dailyForecast.css";


const searchBtn = document.querySelector(".search-btn");
const searchBox = document.querySelector("#search");
const weatherDisplay = document.querySelector(".weather-container");

searchBtn.addEventListener("click", async () => {
    let address = searchBox.value.trim();
    if (address) {
        weatherDisplay.innerHTML = `<p class="message">Loading...</p>`;
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
            // console.log(weatherData);
            // console.log(getLocalTime(weatherData.timezone));
            displayWeather(weatherData, addressData.location);
        } catch (error) {
            // console.log(error);
            weatherDisplay.innerHTML = `<p class="message">Please enter a valid address.</p>`;
        }

    }
})



