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
    this.innerHTML = `
    <div class="tip">
      <div class="header-tip">
        <h1>${this.card_title}</h1>
        <ion-icon class="tip-icon-svg" name="school"></ion-icon>                        
      </div>
      <p>${this.card_tip_description}</p>
    </div>`;
  }
} // class
window.customElements.define("tip-card", CardTip);