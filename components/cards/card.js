class CardElement extends HTMLElement {
  constructor() {
    super();
    this.card_name;
    this.txt_pronuntiation;
    this.meaning_es;
    this.meaning;
  }

  static get observedAttributes() {
    return ['card_name', 'txt_pronuntiation', 'meaning_es', 'meaning'];
  }

  attributeChangedCallback(Attr, oldValue, newValue) {

    if (Attr == "card_name") {
      this.card_name = newValue;
    }
    if (Attr == "txt_pronuntiation") {
      this.txt_pronuntiation = newValue;
    }
    if (Attr == "meaning_es") {
      this.meaning_es = newValue;
    }
    if (Attr == "meaning") {
      this.meaning = newValue;
    }

  }

  connectedCallback() {
    this.innerHTML =
      `<div class="card hidden">
        <h1 class="title-card">${this.card_name}</h1>
        <ul>
          <li>
            <div class="list-header">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="card-icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
              </svg>
              <h4>Pronunciation</h4>
            </div>
            <p>${this.txt_pronuntiation}</p>
          </li>

          <li>
            <div class="list-header">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="card-icon">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
              </svg>
              <h4>Reverse context</h4>
            </div>
            <p>${this.meaning_es}</p>
          </li>

          <li>
            <div class="list-header">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="card-icon">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <h4>Example</h4>
            </div>
            <p>${this.meaning}</p>
          </li>
        </ul>
      </div>`;
  }
} // class
window.customElements.define("the-card", CardElement);