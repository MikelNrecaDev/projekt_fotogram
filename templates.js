function generateImageCardHTML(i, images) {
   return `
        <button class="picture-card">
        <img src="${images}" id="picturecard" onclick="openDetailView(${i})" alt="">
    </button
    `;
}

function generateDetailViewHTML(index) {
    console.log("aktueller Index: ", index);
    return `
        <detail>
            <div class="img-wrapper">
                <img src="${images}" alt="">
            </div>
                  <button onclick="previousImage(index)" id="backward" class="left_button">
                    <img src="./assets/img/PfeilLinks.png"> 
                </button>
                <button onclick="nextImage(index)" id="forward" class="right_button">
                    <img src="./assets/img/PfeilRechts.png">
                </button>
                <button id="close" class="close_window" onclick="closeDetailView()">
                    <img src="./assets/img/Exit.png" alt="">
                </button>
            
        </detail>
    `;
}
