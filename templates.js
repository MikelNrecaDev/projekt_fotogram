function generateImageCardHTML(i, images) {
   return `
        <button class="picture-card">
        <img src="${images}" id="picturecard" onclick="openDetailView(${i})" alt="">
    </button>
    `;
}

function generateDetailViewHTML(image, index) {
    return `
        <detail>
            <div class="img-wrapper">
                <img id="openImage" src="${image}" alt="${descriptions[index]}">
            </div>
            <div class="buttons">
                  <button onclick="previousImage(${index})" id="openImage" class="left_button">
                    <img src="./assets/img/PfeilLinks.png"> 
                </button>
                <p class="numbers" id="nextNumber">${index + 1}/${images.length}</p>
                <button onclick="nextImage(${index})" id="openImage" class="right_button">
                    <img src="./assets/img/PfeilRechts.png">
                </button>
            </div>
                <button id="close" class="close_window" onclick="closeDetailView()">
                    <img src="./assets/img/Exit.png" alt="">
                </button>
            
        </detail>
    `;
}
