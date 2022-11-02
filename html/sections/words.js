class Words extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML =
      `
           
        `;
  }
} // class

window.customElements.define("class-words", Words);

/* 
<the-card card_name='' txt_pronuntiation='' meaning_es='' meaning=''></the-card>

<tip-card card_title="" tip_description=''></tip-card>

<slang-card slang_name="" slang_es="No problem : no hay problema 😌"></slang-card> 
*/