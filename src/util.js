export function createElement(element, className = "", textContent = "") {
    const elem = document.createElement(element);
    if (className) elem.className = className;
    if (textContent) elem.textContent = textContent;
    return elem;
}

export function createImgElement(src, width = "80", height = "80") {
    const img = new Image(width, height);
    img.src = src;
    return img;
}

