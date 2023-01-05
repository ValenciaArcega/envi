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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="topBar-anker-svg">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
        <p class="topBar-anker-p">Home</p>
    </a>
        
    <button type="button" title="Button focus search bar" class="topBar-btnSearch">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="topBar-btn-svg">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
        <p class="topBar-btn-p">Search</p>
    </button>
        
    <button type="button" title="Button turn dark mode" class="topBar-btnDark">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="topBar-btn-svg">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
        <p class="topBar-btn-p">Dark</p>
    </button>
        
    <button type="button" title="Button turn light mode" class="topBar-btnLight filter">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="topBar-btn-svg">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
        <p class="topBar-btn-p">Light</p>
    </button>
</div>`;
  } // callback inner
} // class

window.customElements.define("top-bar", TopBar);