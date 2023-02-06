'use strict';

const tipCards = [
  { ntc: "tip", des: "El Inglés es un idioma fonetico y no todas las palabras se pronuncian como se escriben" },
  { ntc: "", des: "En Español pronunciamos tal cual leemos, y resulta un tanto dificil dar el salto" },
  { ntc: "", des: "¡Animo!, ya hablas un idioma más dificil. El Inglés es 20% más fácil que el Español" },

  { ntc: "tip", des: "Diferencia entre could y might, ambas palabras significan los mismo, pero..." },
  { ntc: "Might", des: "Might is used to express a lower level of possibility and is common in formal English" },
  { ntc: "Could", des: "Could is used to express past ability or high possibility and is common in informal English" },

  { ntc: "tip", des: "Diferencia entre do y make, ambas palabras significan los mismo, pero..." },
  { ntc: "Do", des: "Do is used to describe actions or activities that involve a specific task or purpose" },
  { ntc: "Make", des: "While Make is used to describe the creation of something (imagination)" },

  { ntc: "homophones", des: "Los homófonos son palabras con la misma pronunciación, pero un significado distinto" },
  { ntc: "homophones", des: "Las palabras Write, Right y Rite(rito) se pronuncian exactamente igual: rhait" },
  { ntc: "homophones", des: "Why y la letra Y son homófonos, es común ver y? reemplazando a la pregunta" },

  { ntc: "homophones", des: "Las palabras by, bye y buy son homófonos, es decir, todas suenan: bai" },
  { ntc: "homophones", des: "2 y la palabra too son homófonos, y en escritura informal suelen sustituirse" },
  { ntc: "homophones", des: "eye y el pronombre I son homófonos, es decir, ambas suenan igual: ay" },

  { ntc: "tip", des: "Puedes agregar un icono de cualquier sección de Tolescro en tu pantalla de inicio" },
  { ntc: "", des: "Ve al menu del navegador y da click en la opción Agregar icono a pantalla de inicio" },
  { ntc: "", des: "Listo tendras un acceso directo, esto lo puedes hacer con cualquier sección" },

  { ntc: "homophones", des: "La letra U y la palabra you son homófonos, de manera informal suelen sustituirse" },
  { ntc: "homophones", des: "Las palabras Good y Would su pronunciación es exactamente igual: ghud" },
  { ntc: "homophones", des: "La palabra hour y la pertenencia our(nuestro) suenan igual: a-our" },

  { ntc: "Cognates", des: "Son palabras que se escriben o suenan similar en dos idiomas y significan lo mismo" },
  { ntc: "False friends", des: "Son palabras que suenan o se escriben similar pero no significan lo mismo" },
  { ntc: "False friends", des: "Actually ⇌ Realmente (NO actualmente) debido a que Actualmente ⇌ Currently" },

  { ntc: "tip", des: "Ya suele ser otra manera informal de escribir o decir al pronombre you" },
  { ntc: "tip", des: "Recuerda que los idiomas no se traducen literalmente. Algunas palabras si..." },
  { ntc: "tip", des: "pero algunas expresiones dependen de la cultura del pais o el contexto del idioma" },

  { ntc: "False friends", des: "Advice ⇌ Consejo (NO confundir con: aviso) debido a que Aviso ⇌ Warning" },
  { ntc: "False friends", des: "Conductor ⇌ Director de orquesta (NO: conductor) ya que Conductor ⇌ Driver" },
  { ntc: "False friends", des: "Dude ⇌ Amigo (NO confundir con: duda) debido a que Duda ⇌ Doubt(da-uth)" },

  { ntc: "False friends", des: "Groceries ⇌ Comestibles (NO groserias) debido a que Groserias ⇌ Rudeness" },
  { ntc: "False friends", des: "Advice ⇌ Consejo (NO confundir con aviso) debido a que Aviso ⇌ Warning / Ad" },
  { ntc: "False friends", des: "Exit ⇌ Salir de / La salida (NO confundir con éxito) debido a que Éxito ⇌ Success" },

  // { ntc: "", des: "" },  
];

let outputTips = '';

for (let i = 0; i < tipCards.length; i++) {
  outputTips += `
  <div class="tip">
    <div class="header-tip">
      <h1>${tipCards[i].ntc}</h1>
      <ion-icon class="tip-icon-svg" name="school-outline"></ion-icon>                        
    </div>
    <p>${tipCards[i].des}</p>
  </div>
  `;
}
document.querySelector('.sliderTips').innerHTML = outputTips;

/*
class CardTip extends HTMLElement {

  constructor() {
    super();
    this.card_title;
    this.card_tip_description;
  }

  static get observedAttributes() {
    return ['card_title", 'tip_description'];
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
*/