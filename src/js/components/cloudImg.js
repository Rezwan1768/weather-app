import clouds from "../../images/clouds.svg";
import partialCloud from "../../images/partiallyCloudy.svg";
import rain from "../../images/rain.svg";
import sun from "../../images/sun.svg";
import { createImgElement } from "../utils/util";

// Returns an img element based on the description of the cloud condition
export function getConditionImg(condition) {
    switch (condition.toLowerCase()) {
        case "rain": return createImgElement(rain, "Rainy");
        case "clear": return createImgElement(sun, "Sunny");
        case "overcast": return createImgElement(clouds, "Cloudy");
        case "partially cloudy":
        default:
            return createImgElement(partialCloud, "Partially Cloudy");
    }
}
