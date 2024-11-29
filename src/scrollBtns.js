import { createElement } from "./util";
export function appendScrollBtns(container) {
    const weatherDisplay = container.querySelector(".weather-display");
    const [prevBtn, nextBtn] = createScrollButtons(weatherDisplay);
    container.append(prevBtn, nextBtn);
}

function createScrollButtons(weatherDisplay) {
    const prevBtn = createElement("button", "prev");
    const nextBtn = createElement("button", "next");
    prevBtn.innerHTML = "&#10094;";
    nextBtn.innerHTML = "&#10095;";

    // A single weather container, used to calculate the amount to scroll by
    const weatherContainer = weatherDisplay.querySelector(".weather-container");

    // Utility function to update button states
    const updateButtonState = () => {
        prevBtn.disabled = weatherDisplay.scrollLeft === 0;
        nextBtn.disabled = weatherDisplay.scrollLeft + weatherDisplay.offsetWidth >= weatherDisplay.scrollWidth;
        if (prevBtn.disabled) prevBtn.classList.add("hidden")
        else prevBtn.classList.remove("hidden");

        if (nextBtn.disabled) nextBtn.classList.add("hidden")
        else nextBtn.classList.remove("hidden");
    };

    // Initial button state
    updateButtonState();
    // Update the button states when scrolled
    weatherDisplay.addEventListener("scroll", updateButtonState);

    prevBtn.addEventListener("click", () => {
        weatherDisplay.scrollBy({
            left: -weatherContainer.offsetWidth * 4,
            behavior: "smooth",
        });
    });

    nextBtn.addEventListener("click", () => {
        weatherDisplay.scrollBy({
            left: weatherContainer.offsetWidth * 4,
            behavior: "smooth",
        });
    });

    return [prevBtn, nextBtn];
}
