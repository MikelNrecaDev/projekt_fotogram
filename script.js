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



function openDetailView(index) {
    const image = images[index];
    const detailBox = document.getElementById("detail-box");
    detailBox.classList.remove("d-none");

    detailBox.innerHTML = "";
    detailBox.innerHTML = generateDetailViewHTML(image, index);
}

function closeDetailView() {
    const detailBox = document.getElementById("detail-box");
    detailBox.classList.add("d-none"); // Klasse d-none hinzugefügt

}

function nextImage(index) {
    if (index < images.length) {
        index++;
    }
    return index;
}
