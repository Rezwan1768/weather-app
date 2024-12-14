import { createElement } from "../utils/util";

export function appendScrollBtns(forecastContainer) {
    const forecastDisplay = forecastContainer.querySelector(".daily-forecast");
    const [leftBtn, rightBtn] = createScrollButtons(forecastDisplay);
    forecastContainer.append(leftBtn, rightBtn);
}

function createScrollButtons(forecastDisplay) {
    const leftBtn = createElement("button", "left");
    const rightBtn = createElement("button", "right");
    leftBtn.innerHTML = "&#10094;";
    rightBtn.innerHTML = "&#10095;";

    // A single forecast container, used to calculate the amount to scroll by
    const forecast = forecastDisplay.querySelector(".forecast");

    // Utility function to update button states
    const updateButtonState = () => {
        leftBtn.disabled = forecastDisplay.scrollLeft === 0;
        
        // to prevent floting point issues when hiding right button
        const tolerance = 1; 
        rightBtn.disabled = forecastDisplay.scrollLeft + forecastDisplay.offsetWidth >= forecastDisplay.scrollWidth - tolerance;

        // Hide buttons if there is no space to scroll
        if (leftBtn.disabled) leftBtn.classList.add("hidden")
        else leftBtn.classList.remove("hidden");

        if (rightBtn.disabled) rightBtn.classList.add("hidden")
        else rightBtn.classList.remove("hidden");
    };

    // Initial button state
    updateButtonState();
    // Update the button states when scrolled
    forecastDisplay.addEventListener("scroll", updateButtonState);

    leftBtn.addEventListener("click", () => {
        forecastDisplay.scrollBy({
            left: -forecast.offsetWidth * 4,
            behavior: "smooth",
        });
    });

    rightBtn.addEventListener("click", () => {
        forecastDisplay.scrollBy({
            left: forecast.offsetWidth * 4,
            behavior: "smooth",
        });
    });

    return [leftBtn, rightBtn];
}
