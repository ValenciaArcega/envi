const tCards = [
  { cn: 'test01', pro: 'test01', es: 'test01', ex: 'test01' },
  { cn: 'test02', pro: 'test02', es: 'test02', ex: 'test02' },
  { cn: 'test03', pro: 'test03', es: 'test03', ex: 'test03' },
  { cn: 'test03', pro: 'test03', es: 'test03', ex: 'test03' },
  { cn: 'test03', pro: 'test03', es: 'test03', ex: 'test03' },
];

let output = '';

for (let i = 0; i < tCards.length; i++) {
  output += ` 
  <div class="card">
      <h1 class="title-card">${tCards[i].cn}</h1>
      <ul>
        <li>
          <div class="list-header">
            <ion-icon class="card-svg" name="mic-outline"></ion-icon>
            <h4>Pronunciation</h4>
          </div>
          <p>${tCards[i].pro}</p>
        </li>

        <li>
          <div class="list-header">
            <ion-icon class="card-svg" name="language-outline"></ion-icon>
            <h4>Reverse context</h4>
          </div>
          <p>${tCards[i].es}</p>
        </li>

        <li>
          <div class="list-header">
            <ion-icon class="card-svg" name="extension-puzzle-outline"></ion-icon>             
            <h4>Example</h4>
          </div>
          <p>${tCards[i].ex}</p>
        </li>
      </ul>
  </div>`
}
document.querySelector('.cards').innerHTML = output;