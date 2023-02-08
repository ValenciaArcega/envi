'use strict';

const arrTest = [
  { cn: "Within", pro: "wi - din", es: "Dentro / en (tiempo)", ex: "I called the ambulance, gonna arrive within 10 minutes ⇌ Llamé a la ambulancia, llegará dentro de 10 minutos" },
  { cn: "Achievements", pro: "ah - chiv - menths", es: "Logros alcanzados", ex: "My best achievement have been to learn three languages ⇌ Mi mayor logro ha sido aprender tres idiomas" },
  { cn: "Kidnap", pro: "kid - nap", es: "Secuestrar", ex: "Kidnapping are common on this country unfortunately ⇌ Desafortunadamente, los secuestros son comunes en este país" },
];

let outputTest = '';
let index, randomNum, k;
for (index = arrTest.length; index; index--) {
  randomNum = Math.floor(Math.random() * index);
  k = arrTest[index - 1];
  arrTest[index - 1] = arrTest[randomNum];
  arrTest[randomNum] = k;
} 

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
document.querySelector('.cards').innerHTML = outputTest;





