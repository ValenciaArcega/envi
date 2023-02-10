'use strict';

import { arrTest } from './data_alternatives.js'

screen1.classList.add('hidden')
screen2.classList.remove('hidden')

let outputTest = '';

for (let indx = 0; indx < arrTest.length; indx++) {
  outputTest += ` 
    <div class="card">
        <h1 class="title-card">${arrTest[indx].cn}</h1>
        <ul>
          <li>
            <div class="list-header">
              <ion-icon class="card-svg" name="mic-outline"></ion-icon>
              <h4>Pronunciation</h4>
            </div>
            <p>${arrTest[indx].pro}</p>
          </li>
  
          <li>
            <div class="list-header">
              <ion-icon class="card-svg" name="language-outline"></ion-icon>
              <h4>Reverse context</h4>
            </div>
            <p>${arrTest[indx].es}</p>
          </li>
  
          <li>
            <div class="list-header">
              <ion-icon class="card-svg" name="extension-puzzle-outline"></ion-icon>             
              <h4>Example</h4>
            </div>
            <p>${arrTest[indx].ex}</p>
          </li>
        </ul>
    </div>`
}
document.querySelector('.section-cards').innerHTML = outputTest;
