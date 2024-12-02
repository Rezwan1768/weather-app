import { displayWeather } from "./weatherDisplay.js";
import "../styles/styles.css";

let location = "new york";  // set a inital default value
const searchBtn = document.querySelector(".search-btn");
const searchBox = document.querySelector("#search");
searchBtn.addEventListener("click", () => {
    if (searchBox.value) {
        location = searchBox.value;
        displayWeather(location);
    }
})



