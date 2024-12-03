import { createElement } from "../utils/util";
export function appendScrollBtns(container) {
    const forecastDisplay = container.querySelector(".daily-forecast");
    const [prevBtn, nextBtn] = createScrollButtons(forecastDisplay);
    container.append(prevBtn, nextBtn);
}

function createScrollButtons(forecastDisplay) {
    const prevBtn = createElement("button", "prev");
    const nextBtn = createElement("button", "next");
    prevBtn.innerHTML = "&#10094;";
    nextBtn.innerHTML = "&#10095;";

    // A single forecast container, used to calculate the amount to scroll by
    const forecast = forecastDisplay.querySelector(".forecast");

    // Utility function to update button states
    const updateButtonState = () => {
        prevBtn.disabled = forecastDisplay.scrollLeft === 0;
        nextBtn.disabled = forecastDisplay.scrollLeft + forecastDisplay.offsetWidth >= forecastDisplay.scrollWidth;
        if (prevBtn.disabled) prevBtn.classList.add("hidden")
        else prevBtn.classList.remove("hidden");

        if (nextBtn.disabled) nextBtn.classList.add("hidden")
        else nextBtn.classList.remove("hidden");
    };

    // Initial button state
    updateButtonState();
    // Update the button states when scrolled
    forecastDisplay.addEventListener("scroll", updateButtonState);

    prevBtn.addEventListener("click", () => {
        forecastDisplay.scrollBy({
            left: -forecast.offsetWidth * 4,
            behavior: "smooth",
        });
    });

    nextBtn.addEventListener("click", () => {
        forecastDisplay.scrollBy({
            left: forecast.offsetWidth * 4,
            behavior: "smooth",
        });
    });

    return [prevBtn, nextBtn];
}
