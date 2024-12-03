import { fetchWeatherData } from "./weatherData.js";
import { displayWeather } from "./weatherDisplay.js";
import "../styles/styles.css";


let location = "new york";  // set a inital default value
const searchBtn = document.querySelector(".search-btn");
const searchBox = document.querySelector("#search");
searchBtn.addEventListener("click", async () => {
    document.querySelector(".change-scale").classList.add("hidden");
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



