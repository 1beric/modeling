let colors = [
    [185, 43, 39],
    [21, 101, 192],
    [196, 113, 237],
    [251, 215, 134],
    [247, 121, 125],
    [84, 51, 255]
];
const color1 = colors.splice(
    Math.floor(Math.random() * colors.length - 1),
    1
)[0];
const color2 = colors.splice(
    Math.floor(Math.random() * colors.length - 1),
    1
)[0];
const nameText = document.querySelector("#large-name");
const splitNameText = nameText.textContent.split("");

nameText.textContent = "";
splitNameText.forEach(
    letter => (nameText.innerHTML += "<span>" + letter + "</span>")
);

let char = 0;
while (char < splitNameText.length) {
    const span = nameText.querySelectorAll("span")[char];
    if (span.textContent != " ") {
        const offset = Math.random() * 20 - 10;
        span.style.setProperty("transition", "transform 1s ease");
        span.style.setProperty("transform", `translateY(${offset}vh)`);
        span.style.setProperty("display", "inline-block");
        span.classList.add("offset");
        span.style.setProperty(
            "color",
            `rgb(${interpolate(color1, color2, char / splitNameText.length)})`
        );
    }
    char++;
}

function interpolate(one, two, factor) {
    const red = one[0] + factor * (two[0] - one[0]);
    const green = one[1] + factor * (two[1] - one[1]);
    const blue = one[2] + factor * (two[2] - one[2]);
    return red + "," + green + "," + blue;
}
