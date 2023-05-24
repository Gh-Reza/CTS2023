import data from './data.js';
import {card} from './temp.js';
import mobileMenu from './menu.js';

mobileMenu();

const speakerCon = document.querySelector('.speaker-container');

if(document.getElementById('home-page')) {
  data.forEach((data, i) => {
    speakerCon.innerHTML += card(data);
  });
}

