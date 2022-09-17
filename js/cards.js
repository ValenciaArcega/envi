class CardElement extends HTMLElement {
  constructor() {
    super();
    this.card_name;
    this.mute_letters;
    this.txt_pronuntiation;
    this.meaning_es;
    this.meaning;
  }

  static get observedAttributes() {
    return ['card_name', 'mute_letters', 'txt_pronuntiation', 'meaning_es', 'meaning'];
  }

  attributeChangedCallback(Attr, oldValue, newValue) {

    if (Attr == "card_name") {
      this.card_name = newValue;
    }
    if (Attr == "mute_letters") {
      this.mute_letters = newValue;
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
        <h1 id="txt" class="title-card">${this.card_name}</h1>
        <ul>
          <li>
            <div class="list-header">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="card-icon" id="speaker">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
              <h4>Pronunciation</h4>
            </div>
            <span class="muteLetters"> ${this.mute_letters}</span>
            <p> : ${this.txt_pronuntiation}</p>
          </li>

          <li>
            <div class="list-header">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="card-icon">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
              </svg>
              <h4>Meaning in Spanish</h4>
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
}

window.customElements.define("the-card", CardElement);