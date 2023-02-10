'use strict';

class TopBar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <div class="topBar">
        <a href="../../index.html#welcom3" class="topBar-anker-backHome" aria-label="Go back">
          <ion-icon class="topBar-anker-svg" name="home-outline"></ion-icon> 
            <p class="topBar-anker-p">Home</p>
        </a>
            
        <button type="button" title="Button focus search bar" class="topBar-btnSearch">
        <ion-icon class="topBar-btn-svg" name="search-outline"></ion-icon>
            <p class="topBar-btn-p">Search</p>
        </button>
            
        <button type="button" title="Button turn dark mode" class="topBar-btnDark">
        <ion-icon class="topBar-btn-svg" name="cloudy-night-outline"></ion-icon>     
            <p class="topBar-btn-p">Night</p>
        </button>
            
        <button type="button" title="Button turn light mode" class="topBar-btnLight hidden">
          <ion-icon class="topBar-btn-svg" name="sunny-outline"></ion-icon>
          <p class="topBar-btn-p">Day</p>
        </button>
    </div>`;
  }
}
window.customElements.define("top-bar", TopBar);