let currentIndex = 0;

function init() {
    initimages();
}

function initimages() {
    const galleryContainer = document.getElementById('gallery');
    galleryContainer.innerHTML = "";

    for (let i = 0; i < images.length; i++) {
        const image = images[i];
        galleryContainer.innerHTML += generateImageCardHTML(i, image);
    }
}



function openDetailView(i) {
    currentIndex = i;
    const image = images[currentIndex];
    const detailBox = document.getElementById("detail-box");
    detailBox.classList.remove("d-none");

    detailBox.innerHTML = "";
    detailBox.innerHTML = generateDetailViewHTML(image);
}

function closeDetailView() {
    const detailBox = document.getElementById("detail-box");
    detailBox.classList.add("d-none"); // Klasse d-none hinzugefügt

}

function nextImage(i) {
    currentIndex = i;
    if (index == 1) {
        index++;
    }
}

document.getElementById('forward').addEventListener('click', nextImage);
