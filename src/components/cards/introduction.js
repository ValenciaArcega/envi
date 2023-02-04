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
        <lord-icon src="https://cdn.lordicon.com/albqovim.json"          trigger="loop"            colors="primary:#20c997"             style="width:32px;height:32px">
            </lord-icon>
      </div>
    </div>`;
  }
} // class
window.customElements.define("intro-card", CardIntroduction);
