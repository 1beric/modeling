const imgs = document.querySelectorAll("img");
const gallerySection = document.getElementById("gallery");

imgs.forEach(img => {
    img.addEventListener("click", image => {
        const div = document.createElement("div");
        div.id = "img-view";
        const xButton = document.createElement("button");
        xButton.style.width = "10vh";
        xButton.style.height = "10vh";
        xButton.textContent = "X";
        const newimg = document.createElement("img");
        newimg.src = img.src;
        newimg.style.setProperty("height", "100%");
        newimg.style.setProperty("margin", "auto");
        xButton.addEventListener("click", elem => {
            div.removeChild(newimg);
            div.removeChild(xButton);
            gallerySection.removeChild(div);
        });
        div.appendChild(newimg);
        div.appendChild(xButton);
        gallerySection.appendChild(div);
    });
});
