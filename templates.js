function generateImageCardHTML(i, image) {
   return `
        <button class="picture-card">
        <img src="${image}" id="picturecard" onclick="OpenDetailView('${i}'}" alt="">
    </button
    `;
}

function OpenDetailView() {
    console.log("aktueller Index ", currentIndex);
    return `
        <detail>
            <div class="img-wrapper">
                <img src="${image}" alt="">
            </div>
                  <button id="backward" class="left_button">
                    <img src="./assets/img/PfeilLinks.png"> 
                </button>
                <button id="forward" class="right_button">
                    <img src="./assets/img/PfeilRechts.png">
                </button>
                <button id="close" class="close_window" onclick="closeDetailView()">
                    <img src="./assets/img/Exit.png" alt="">
                </button>
            
        </detail>
    `;
}
