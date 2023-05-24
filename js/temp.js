const card = (data) => [
  `
  <div class="speaker-item">
    <div class="img-box">
      <img class="chess" src="assets/chess.jpg" alt="chess">
      <img class="speaker-img" src="${data.imgPath}" alt="${data.speakerName} image">
    </div>
    <div class="text-box">
      <h3 class="speaker-name">${data.speakerName}</h3>
      <p class="speaker-position">${data.speakerPosition}</p>
      <span class="sap-line"></span>
      <p class="speaker-discription normal">${data.speakerDescription}</p>
    </div>
  </div>
  `
]

export {card};