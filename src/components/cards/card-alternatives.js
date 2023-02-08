'use strict';

import { tCards } from './data-alternatives.js'

let outputTCards = '';
let arrSize_a, randomNumber_a, index_a;

for (arrSize_a = tCards.length; arrSize_a; arrSize_a--) {
  randomNumber_a = Math.floor(Math.random() * arrSize_a);
  index_a = tCards[arrSize_a - 1];
  tCards[arrSize_a - 1] = tCards[randomNumber_a];
  tCards[randomNumber_a] = index_a;
}

for (let tc = 0; tc < tCards.length; tc++) {
  outputTCards += ` 
    <div class="card">
        <h1 class="title-card">${tCards[tc].cn}</h1>
        <ul>
          <li>
            <div class="list-header">
              <ion-icon class="card-svg" name="mic-outline"></ion-icon>
              <h4>Pronunciation</h4>
            </div>
            <p>${tCards[tc].pro}</p>
          </li>
  
          <li>
            <div class="list-header">
              <ion-icon class="card-svg" name="language-outline"></ion-icon>
              <h4>Reverse context</h4>
            </div>
            <p>${tCards[tc].es}</p>
          </li>
  
          <li>
            <div class="list-header">
              <ion-icon class="card-svg" name="extension-puzzle-outline"></ion-icon>             
              <h4>Example</h4>
            </div>
            <p>${tCards[tc].ex}</p>
          </li>
        </ul>
    </div>`
}
document.querySelector('.cards').innerHTML = outputTCards;