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
        this.innerHTML =
            `
        <div class="top-bar">
           <a href="${this.source_back}" class="btn-BackSections" aria-label="Go back">
                <svg xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-back">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </a>
        </div>`;
    }
}

window.customElements.define("top-bar", TopBar);