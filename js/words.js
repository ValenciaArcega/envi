class Words extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML =
`
      <top-bar src="sections.html"></top-bar>

      <div class="section-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="icon-section">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
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
    
          <slang-card slang_name="fr" slang_es="For real : De verdad"></slang-card>
    
          <slang-card slang_name="lil" slang_es="Little : Pequeñ@ 🤏"></slang-card>
    
          <!-- SLANG  -->
          <slang-card slang_name="lmfao" slang_es="Laughing my freaking ass off : me cago de la risa 🤣"></slang-card>
    
          <slang-card slang_name="hbd" slang_es="Happy birthday : Feliz cumpleaños 🎁"></slang-card>
    
          <slang-card slang_name="wdym?" slang_es="What do you mean? : ¿A que te refieres?, ¿Qué quieres decir?"></slang-card>
    
          <!-- SLANG  -->
          <slang-card slang_name="wyd?" slang_es="What you doing? : ¿Qué haces?"></slang-card>

          <slang-card slang_name="lmk" slang_es="Let me know : Házmelo saber 😉"></slang-card>

          <slang-card slang_name="idts" slang_es="I donot think so : No lo creo, no pienso lo mismo 🤔"></slang-card>
    
 
    
   
    
          <!-- SLANG -->
          <slang-card slang_name="Tryna" slang_es="Trying to : Tratando de..."></slang-card>
    
          <slang-card slang_name="Hafta" slang_es="Have to : Tener que..."></slang-card>
    
          <slang-card slang_name="Outta" slang_es="Out of : Fuera de..."></slang-card>
    
          <!-- SLANG -->
          <slang-card slang_name="Gonna" slang_es="Going to : Voy a / vas a / va a / van a"></slang-card>
    
          <slang-card slang_name="Kinda" slang_es="Kind of : Más o menos"></slang-card>
    
          <slang-card slang_name="Imma" slang_es="Im gonna : Voy a..."></slang-card>
    
          <!-- SLANG -->
          <slang-card slang_name="Wanna" slang_es="Want to : Quiero/es, quiere/n / queremos"></slang-card>
    
          <slang-card slang_name="Gotta" slang_es="Have got to : Tener que"></slang-card>
    
          <slang-card slang_name="Gimme" slang_es="Give me : Dame (un minuto, tiempo, la oportunidad. etc.)"></slang-card>
    
          <!-- SLANG -->
          <slang-card slang_name="Lemme" slang_es="Let me : Déjame (mostrarte, adivinar, ver, probar, etc.)"></slang-card>
    
          <slang-card slang_name="Dunno" slang_es="Donot know : No lo se / sabemos / saben / sabes / sabe 🤔"></slang-card>

          <slang-card slang_name="Lotta" slang_es="Lot of : Mucho / Bastante de..."></slang-card>
    
        </div>
      </div>
    
      <footer>&copy; 2022, Tolescro</footer>           
`;
  }
} // class

window.customElements.define("class-words", Words);

/* 
<the-card card_name='' txt_pronuntiation='' meaning_es='' meaning=''></the-card>

<tip-card card_title="" tip_description=''></tip-card>

<slang-card slang_name="" slang_es="No problem : no hay problema 😌"></slang-card> 
*/