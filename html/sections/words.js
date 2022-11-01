
class Tester extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML =
      `
      <top-bar src="../sections.html"></top-bar>

      <div class="section-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="icon-section">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      </div>
  
      <div class="searchBar">
        <input type="text" name="finder" id="finder" placeholder="Search words, slangs">
      </div>
  
      <div class="section-cards">
        <div class="cards">
  
          <intro-card title="Welcome to words"
            description="Son palabras comunes con muchas variaciones a la hora de hablar, es por ello que es importante agregarlas a nuestro vocabulario.">
          </intro-card>
  
          <intro-card title="There are slangs 2"
            description="Los slangs son muy comunes e utilizados en mensajes de texto y redes sociales. Son abreviaciones de escritura informal.">
          </intro-card>
  
          <the-card card_name="Environment" txt_pronuntiation="in-vai-rn-mnt" meaning_es="Entorno, ambiente"
            meaning="Conjunto de factores sociales, culturales, económicos, etc, que rodean a una cosa o persona, e influyen en su desarrollo.">
          </the-card>
  
          <section class="sliderTips">
            <tip-card card_title="one click!"
              tip_description="Puedes agregar un icono de cualquier sección de tolescro en tu pantalla de inicio. 📱">
            </tip-card>
  
            <tip-card card_title=""
              tip_description='Da click en las opciones de la página en tu navegador y en la opción "Agregar icono a pantalla de inicio".'>
            </tip-card>
  
            <tip-card card_title=""
              tip_description='Listo tendras un acceso directo, esto lo puedes hacer con cualquier sección.'>
            </tip-card>
          </section>
  
<!-- SLANG  -->
          <slang-card slang_name="btw" slang_es="By the way : por cierto 😬"></slang-card>
  
          <slang-card slang_name="smh" slang_es="Shaking my head : mover la cabeza con desaprobación 🤦"></slang-card>
  
          <slang-card slang_name="np" slang_es="No problem : no hay problema 😌"></slang-card>
  
          <the-card card_name="Inquisitive" txt_pronuntiation="in-ki-si-tib" meaning_es="Pregunton, muy curioso 🧐"
            meaning='Adjetivo usado para caracterizar a alguien que hace muchas preguntas o es muy insistente con un tema.'>
          </the-card>
  
          <the-card card_name="Overview" txt_pronuntiation="ow - vr - viu" meaning_es="Vistazo, una vista general 👁"
            meaning="Es una breve descripción de algo, da una vista general, pero sin entrar en detalles."></the-card>
  
          <the-card card_name="Knowledge" txt_pronuntiation="no - lech" meaning_es="Conocimiento 🧠"
            meaning="Significa lo que puede ser conocido por un individuo a través del estudio, la experiencia o la investigación.">
          </the-card>
  
<!-- SLANG  -->
          <slang-card slang_name="pls" slang_es="Please : por favor 🙏"></slang-card>
  
          <slang-card slang_name="thx" slang_es="Thanks : gracias 😊"></slang-card>
  
          <slang-card slang_name="rn" slang_es="Right now : ahora mismo 👇"></slang-card>
  
<!-- SLANG  -->
          <slang-card slang_name="tbh" slang_es="To be honest : para ser honest@"></slang-card>
  
          <slang-card slang_name="jk" slang_es="Just kidding : solo bromeo 😂"></slang-card>
  
          <slang-card slang_name="ngl" slang_es="Not gonna lie : no voy a mentir 🤷"></slang-card>
  
<!-- SLANG  -->
          <slang-card slang_name="nvm" slang_es="Never mind : No importa, olvidalo"></slang-card>
  
          <slang-card slang_name="fr" slang_es="For real : de verdad"></slang-card>
  
          <slang-card slang_name="lil" slang_es="Little : pequeñ@ 🤏"></slang-card>
  
<!-- SLANG  -->
          <slang-card slang_name="lmfao" slang_es="Laughing my freaking ass off : me cago de la risa 🤣"></slang-card>
  
          <slang-card slang_name="hbd" slang_es="Happy birthday : feliz cumpleaños 🎁"></slang-card>
  
        </div>
      </div>
  
      <footer>&copy; 2022, Tolescro</footer>      
        `;
  }
} // class

window.customElements.define("class-words", Tester);



/* 
<the-card card_name="" txt_pronuntiation="" meaning_es="" meaning=""></the-card>

<tip-card card_title="" tip_description=''></tip-card>

<slang-card slang_name="" slang_es="No problem : no hay problema 😌"></slang-card> 
*/