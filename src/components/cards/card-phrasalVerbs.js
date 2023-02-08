'use strict';

import { phrasalVerbs } from './data-phrasalVerbs.js'

let outputPhrasalV = '';
let arrSize, randomNumber, index;

for (arrSize = phrasalVerbs.length; arrSize; arrSize--) {
  randomNumber = Math.floor(Math.random() * arrSize);
  index = phrasalVerbs[arrSize - 1];
  phrasalVerbs[arrSize - 1] = phrasalVerbs[randomNumber];
  phrasalVerbs[randomNumber] = index;
}

for (let pv = 0; pv < phrasalVerbs.length; pv++) {
  outputPhrasalV += `
  <div class='card'>
    <h1 class='title-card'>${phrasalVerbs[pv].cn}</h1>
    <ul>
      <li>
        <div class='list-header'>
          <ion-icon class='card-svg' name='mic-outline'></ion-icon>
          <h4>Pronunciation</h4>
        </div>
        <p>${phrasalVerbs[pv].pro}</p>
      </li>

      <li>
        <div class='list-header'>
          <ion-icon class='card-svg' name='language-outline'></ion-icon>
          <h4>Reverse context</h4>
        </div>
        <p>${phrasalVerbs[pv].es}</p>
      </li>

      <li>
        <div class='list-header'>
          <ion-icon class='card-svg' name='extension-puzzle-outline'></ion-icon>  
          <h4>Example</h4>
        </div>
        <p>${phrasalVerbs[pv].ex}</p>
      </li>
    </ul>
  </div>
  `;
}

document.querySelector('.cardsPV').innerHTML = outputPhrasalV;