class PhrasalVerbs extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML =
      `
<top-bar src="../../../index.html#welcom3"></top-bar>

<div class="section-icon">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
    class="icon-section">
    <path stroke-linecap="round" stroke-linejoin="round"
      d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
  </svg>
</div>

<div class="searchBar">
  <input type="text" name="finder" id="finder" placeholder="Search phrasal verbs">
</div>

<div class="section-cards">
  <div class="cards">

    <intro-card title="Welcome to phrasal verbs"
      description="Son frases acompañadas de un verbo, pero su significado no siempre tiene relación con el, son más informales pero ayudan a mejorar nuestra manera de expresarnos.">
    </intro-card>

    <the-card card_name='Burn out' txt_pronuntiation='brn - auth' meaning_es='Quemarse de hacer algo 🥱' meaning='"I just coded a lot, therefore I burn out" ⇌ "He estado mucho tiempo programando, ya me fastidie"'></the-card>
    
    <the-card card_name="Hold on" txt_pronuntiation="jhol - don" meaning_es="Aguanta / Espera"
      meaning='"Hold on I am tryna pay attention" ⇌ "Espera estoy tratando de poner atención"'></the-card>

    <the-card card_name="Show off" txt_pronuntiation="sho - u of" meaning_es="Presumir, alardear sobre algo"
      meaning='"Ranks doesnot matter at all, stop to Show off them" : "Las calificaciones no son del todo importantes, deja de presumir"'>
    </the-card>    

    <the-card card_name="Hang out" txt_pronuntiation="jan - gaut" meaning_es="Pasar el rato"
      meaning='"I wanna hang out with my friends" ⇌ "Quiero pasar tiempo con mis amigos"'></the-card>

    <the-card card_name='Break out' txt_pronuntiation='bre - ik aut' meaning_es='Escaparse'
      meaning='"The prisoners broke out of jail when nobody looking" ⇌ "Los prisioneros escaparon de la cárcel cuando nadie miraba"'>
    </the-card>

    <the-card card_name="Ask out" txt_pronuntiation="ask auth" meaning_es="Invitar a una cita"
      meaning='"She wanted to Ask him out however is too shy" : "Ella quería invitarlo a salir, sin embargo es demasiado tímida"'>
    </the-card>

    <the-card card_name="Back up" txt_pronuntiation="bak op" meaning_es="Respaldar información"
      meaning='"You must Back up important documents on your computer" : "Debes hacer una copia de seguridad de los documentos importantes en tu pc"'>
    </the-card>

    <the-card card_name='Bitch up' txt_pronuntiation='bich op' meaning_es='Arruinar algo'
      meaning='"I just bitched up the interview, was terrible" ⇌ "Arruiné / Jodí la entrevista, fue terrible"'>
    </the-card>

    <the-card card_name='Block off' txt_pronuntiation='blok of'
      meaning_es='Obstruir la salida para evitar que alguien se vaya'
      meaning='"The firemen Blocked off the building after the fire" ⇌ "Los bomberos bloquearon el edificio tras el incendio"'>
    </the-card>

    <the-card card_name='Book in' txt_pronuntiation='buk in' meaning_es='Reservar en un hotel'
      meaning='"I took a taxi from the airport to the hotel and Booked in." ⇌ "Tomé un taxi desde el aeropuerto hasta el hotel y reservé."'>
    </the-card>

    <the-card card_name='Call up' txt_pronuntiation='khal up' meaning_es='Llamar / Marcar por teléfono'
      meaning='"I Called her up as soon as I got my phone" ⇌ "La llamé tan pronto como obtuve mi teléfono."'>
    </the-card>

    <the-card card_name='Calm down' txt_pronuntiation='kalm daun' meaning_es='Relajarse / Bajar el enojo'
      meaning='"You need to calm down, you are too angry" ⇌ "Necesitas calmarte, estás demasiado enojad@"'></the-card>

    <the-card card_name='Carry on' txt_pronuntiation='kerui on' meaning_es='Continuar / Proseguir'
      meaning='"You have to carry on with your exam until the teacher comes" ⇌ "Tienes que continuar con tu examen hasta que venga la/el profesor/a."'>
    </the-card>

    <the-card card_name='Break up' txt_pronuntiation='bre - ik up' meaning_es='Terminar una relación'
      meaning='"We broke up before get back college" ⇌ "Rompimos antes de volver a la universidad"'></the-card>

    <div class="card-building">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd"
          d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
          clip-rule="evenodd" />
        <path
          d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
        <path fill-rule="evenodd"
          d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z"
          clip-rule="evenodd" />
      </svg>
      <h6>Creando</h6>
      <p>¡Nuevas cartas vendrán mañana!</p>
    </div>

  </div>
</div>

<footer>&copy; 2022, Tolescro</footer>
`;
  }
} // class

window.customElements.define("class-phverbs", PhrasalVerbs);