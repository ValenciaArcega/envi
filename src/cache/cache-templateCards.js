/*
function checkVisibility(entries) {
  let entry = entries;
  if (entry.isIntersecting) {
    console.log('El elemento es visible');
  } else {
    console.log('El elemento no es visible');
  }
}
let observer = new IntersectionObserver(checkVisibility, {})
let cody = document.querySelector('.card');
observer.observe(cody);
*/
/*
class TCards extends HTMLElement {
  constructor() {
    super();
    this.cn;
    this.pro;
    this.es;
    this.ex;
  }

  static get observedAttributes() {
    return ['cn", 'pro", 'es", 'ex'];
  }

  attributeChangedCallback(Attr, oldValue, newValue) {
    if (Attr == 'cn') {
      this.cn = newValue;
    }
    if (Attr == 'pro') {
      this.pro = newValue;
    }
    if (Attr == 'es') {
      this.es = newValue;
    }
    if (Attr == 'ex') {
      this.ex = newValue;
    }
  }

  connectedCallback() {
    this.innerHTML =
    `<div class='card'>
      <h1 class='title-card'>${this.cn}</h1>
      <ul>
        <li>
          <div class='list-header'>
            <ion-icon class='card-svg' name='mic-outline'></ion-icon>
            <h4>Pronunciation</h4>
          </div>
          <p>${this.pro}</p>
        </li>

        <li>
          <div class='list-header'>
            <ion-icon class='card-svg' name='language-outline'></ion-icon>
            <h4>Reverse context</h4>
          </div>
          <p>${this.es}</p>
        </li>

        <li>
          <div class='list-header'>
            <ion-icon class='card-svg' name='extension-puzzle-outline'></ion-icon>  
            <h4>Example</h4>
          </div>
          <p>${this.ex}</p>
        </li>
      </ul>
    </div>`;
  }
}
window.customElements.define('t-card", TCards);
*/