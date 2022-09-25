
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
}

window.customElements.define("intro-card", CardIntroduction);