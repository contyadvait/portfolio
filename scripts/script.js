function openLightbox(imgId, captionText) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    var caption = document.getElementById("caption");

    lightbox.style.display = "block";
    lightboxImg.src = document.querySelector(`[onclick*="${imgId}"] img`).src;
    caption.innerHTML = captionText;

    document.addEventListener("keydown", closeOnEscape);
}

function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";

    document.removeEventListener("keydown", closeOnEscape);
}

function closeOnEscape(event) {
    if (event.key === "Escape" || event.key === "Esc") {
        closeLightbox();
    }
}
