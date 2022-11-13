
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
      `<div class="card">
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
              <h4>Meaning</h4>
            </div>
            <p>${this.meaning}</p>
          </li>
        </ul>
      </div>`;
  }
} // class
window.customElements.define("the-card", CardElement);



class CardSlang extends HTMLElement {

  constructor() {
    super();
    this.card_slang_name;
    this.card_meaning_es;
  }

  static get observedAttributes() {
    return ['slang_name', 'slang_es'];
  } // observed

  attributeChangedCallback(Attr, oldValue, newValue) {
    if (Attr == "slang_name") {
      this.card_slang_name = newValue;
    }
    if (Attr == "slang_es") {
      this.card_meaning_es = newValue;
    }
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="card-slang">
        <h1 class="title-card">${this.card_slang_name}</h1>
        <ul>
          <li>
            <div class="list-header">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="card-icon">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
              </svg>
              <h4>Meaning</h4>
            </div>
            <p>${this.card_meaning_es}</p>
          </li>
        </ul>
      </div>
        `
  }
} // class
window.customElements.define("slang-card", CardSlang);



class CardIntroduction extends HTMLElement {

  constructor() {
    super();
    this.card_title;
    this.card_description;
  }

  static get observedAttributes() {
    return ['title', 'description'];
  }

  attributeChangedCallback(Attr, oldValue, newValue) {
    if (Attr == "title") {
      this.card_title = newValue;
    }
    if (Attr == "description") {
      this.card_description = newValue;
    }
  }

  connectedCallback() {
    this.innerHTML =
      `<div class="card-introduction">
          <div class="header-introduction">
              <h1>${this.card_title}</h1>
          </div>
          <p>${this.card_description}</p>
          <div class="card-introduction-container-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="card-introduction-icon">
                <path fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd" />
              </svg>
          </div>
      </div>`;
  }
} // class
window.customElements.define("intro-card", CardIntroduction);



class CardTip extends HTMLElement {

  constructor() {
    super();
    this.card_title;
    this.card_tip_description;
  }

  static get observedAttributes() {
    return ['card_title', 'tip_description'];
  }

  attributeChangedCallback(Attr, oldValue, newValue) {
    if (Attr == "card_title") {
      this.card_title = newValue;
    }
    if (Attr == "tip_description") {
      this.card_tip_description = newValue;
    }
  }

  connectedCallback() {
    this.innerHTML =
      `<div class="tip">
            <div class="header-tip">
            <h1>${this.card_title}</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-tip">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>            
            </div>
            <p>${this.card_tip_description}</p>
         </div>`;
  }
} // class
window.customElements.define("tip-card", CardTip);
