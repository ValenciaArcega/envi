class AlterWords extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML =
`
          
`;
  }
} // class

window.customElements.define("class-alterWords", AlterWords);