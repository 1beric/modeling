let bubble = document.getElementById("bubble");
let name = document.getElementById("name");
let sections = document.querySelectorAll(".section");
let gradientColors = [
    "linear-gradient(to top right, white, #0e1a3a)",
    "linear-gradient(to top right, white, #444)",
    "linear-gradient(to top right, white, #470e0e)"
];

const options = {
    threshold: 0.7
};

function navCheck(entries) {
    entries.forEach(entry => {
        const id = entry.target.id;
        const activeAnchor = document.querySelector(`[data-page=${id}]`);
        const gradientIndex = entry.target.getAttribute("data-index");
        const coords = activeAnchor.getBoundingClientRect();
        if (entry.isIntersecting) {
            bubble.style.setProperty("left", `${coords.left}px`);
            bubble.style.setProperty("top", `${coords.top}px`);
            bubble.style.setProperty("height", `${coords.height}px`);
            bubble.style.setProperty("width", `${coords.width}px`);
            bubble.style.background = gradientColors[gradientIndex];
            name.style.background = gradientColors[gradientIndex];
            name.style.setProperty("background-clip", "text");
            name.style.setProperty("-webkit-background-clip", "text");
            name.style.setProperty("-webkit-text-fill-color", "transparent");
        }
    });
}

let observer = new IntersectionObserver(navCheck, options);

sections.forEach(section => observer.observe(section));
