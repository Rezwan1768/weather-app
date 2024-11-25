export function createElement(element, className = "", textContent = "") {
    const elem = document.createElement(element);
    if (className) elem.className = className;
    if (textContent) elem.textContent = textContent;
    return elem;
}

export function createImgElement(src, width = "100", height = "100") {
    const img = new Image(width, height);
    img.src = src;
    return img;
}