function init() {
    initimages();
}


function initimages() {
    const galleryContainer = document.getElementById('gallery');
    galleryContainer.innerHTML = "";

    for (let i = 0; i < images.length; i++) {
        const image = images[i];
        galleryContainer.innerHTML += `<button class="picture-card"><img src="${image}" id="picturecard" onclick="OpenDetailView" alt=""></button`;
    }
}

function OpenDetailView() {
        document.getElementById('picturecard').classList.add('detail-box');
    }





function closeDetailView() {
    document.getElementById('close').onclick = function () {
        document.getElementById('detail-box').classList.add('d-none');

    }
}