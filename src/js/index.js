import { fetchWeatherData } from "./api/weatherData.js";
import { displayWeather } from "./features/weatherDisplay.js";
import { convertTemp } from "./components/tempConversion.js";
import { getCordinates } from "./api/cordinates.js";
import "../styles/styles.css";
import "../styles/weatherDisplay.css";


const searchBtn = document.querySelector(".search-btn");
const searchBox = document.querySelector("#search");

// Decided to leave the scale conversion button in HTML instead of creating it with JS.
// This is because the scale would go back to default (F), everytime it was rendered.
const convertTempBtn = document.querySelector("button.change-scale");
convertTempBtn.addEventListener("click", convertTemp);

searchBtn.addEventListener("click", async () => {
    // Hide the button when there is no weather being displayed
    convertTempBtn.classList.add("hidden");
    if (searchBox.value.trim()) {
        const weatherDisplay = document.querySelector(".weather-display");
        let address = searchBox.value.trim();
        weatherDisplay.textContent = "Loading...";
        try {
            // Converts the address to lattitude and longitude
            const [lat, long] = await getCordinates(address);
            if (!lat || !long) {
                throw new Error("Could not find this location. Make sure the address you entered is valid");
            }
            const weatherData = await fetchWeatherData(lat, long);
            if (!weatherData) {
                throw new Error("No weather data available for the given location.");
            }
            console.log(weatherData);

            convertTempBtn.classList.remove("hidden");
            displayWeather(weatherData);
        } catch (error) {
            weatherDisplay.textContent = "Please enter a valid address.";
        }

    }
})



