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
    console.log("aktueller Index: ", index);
    const openImage = document.getElementById("openImage");
    console.log('openImage ', openImage);

    openImage.src = images[index + 1];
    console.log("neues Bild: ", openImage);

    openDetailView(index + 1);

    if (index === images.length - 1) {
        openDetailView(0)
    } else {
        openDetailView(index + 1);
    }
}

function previousImage(index) {
    console.log("aktueller Index: ", index);
    const openImage = document.getElementById("openImage");
    console.log('openImage ', openImage);  

    if (index < 0) {
        openDetailView(12)
    } else {
        openDetailView(index - 1);
    }
}




