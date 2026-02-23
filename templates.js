function init() {
    initimages();
}

function initimages() {
    const galleryContainer = document.getElementById('gallery');
    galleryContainer.innerHTML = "";

    for (let i = 0; i < images.length; i++) {
        const image = images[i];
        galleryContainer.innerHTML += `<button class="picture-card"><img src="${image}" alt=""></button`;
    }
}

