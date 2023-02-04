class TopBar extends HTMLElement {
  constructor() {
    super();
    this.source_back;
  }
  static get observedAttributes() {
    return ['src'];
  }
  attributeChangedCallback(Attr, oldValue, newValue) {
    if (Attr == "src") {
      this.source_back = newValue;
    }
  }
  connectedCallback() {
    this.innerHTML = `
<div class="topBar">
    <a href="${this.source_back}" class="topBar-anker-backHome" aria-label="Go back">
      <ion-icon class="topBar-anker-svg" name="layers-outline"></ion-icon>        
        <p class="topBar-anker-p">Sections</p>
    </a>
        
    <button type="button" title="Button focus search bar" class="topBar-btnSearch">
    <ion-icon class="topBar-btn-svg" name="search-outline"></ion-icon>
        <p class="topBar-btn-p">Search</p>
    </button>
        
    <button type="button" title="Button turn dark mode" class="topBar-btnDark">
    <ion-icon class="topBar-btn-svg" name="moon-outline"></ion-icon>        
        <p class="topBar-btn-p">Dark</p>
    </button>
        
    <button type="button" title="Button turn light mode" class="topBar-btnLight hidden">
      <ion-icon class="topBar-btn-svg" name="sunny-outline"></ion-icon>
      <p class="topBar-btn-p">Light</p>
    </button>
</div>`;
  } // callback inner
} // class

window.customElements.define("top-bar", TopBar);