let images = Array.from(document.querySelectorAll(".image-card img"));

let currentIndex = 0;

function filterImages(category) {

    let cards = document.querySelectorAll(".image-card");

    cards.forEach(card => {
        if (category === "all" ||
            card.dataset.category === category) {
            card.style.display = "block";
        }

        else {
            card.style.display = "none";
        }
    });
}

function openLightbox(src) {
    currentIndex =
        images.findIndex(
            img => img.src === src
        );

    document.getElementById(
        "lightboxImage"
    ).src = src;

    document.getElementById(
        "lightbox"
    ).style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length)
        currentIndex = 0;
    changeImage();
}

function previousImage() {
    currentIndex--;
    if (currentIndex < 0)
        currentIndex = images.length - 1;
    changeImage();
}

function changeImage() {
    document.getElementById("lightboxImage").src = images[currentIndex].src;
}

document.addEventListener("keydown",(e) => 
    {
        if (e.key === "ArrowRight")
            nextImage();

        if (e.key === "ArrowLeft")
            previousImage();

        if (e.key === "Escape")
            closeLightbox();
    });