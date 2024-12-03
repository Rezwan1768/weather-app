import { fetchWeatherData } from "./api/weatherData.js";
import { displayWeather } from "./features/weatherDisplay.js";
import { convertTemp } from "./components/tempConversion.js";
import "../styles/styles.css";
import "../styles/weatherDisplay.css";

let location = "new york";  // set a inital default value
const searchBtn = document.querySelector(".search-btn");
const searchBox = document.querySelector("#search");
const convertTempBtn = document.querySelector("button.change-scale");
convertTempBtn.addEventListener("click", convertTemp);
searchBtn.addEventListener("click", async () => {
    convertTempBtn.classList.add("hidden");
    if (searchBox.value.trim()) {
        const weatherDisplay = document.querySelector(".weather-display");
        location = searchBox.value.trim();
        weatherDisplay.textContent = "Loading...";
        try {
            const data = await fetchWeatherData(location);
            console.log(data);
            displayWeather(data);
            searchBox.value = "";
        } catch (error) {
            weatherDisplay.textContent = "Please enter a valid address.";
        }

    }
})



