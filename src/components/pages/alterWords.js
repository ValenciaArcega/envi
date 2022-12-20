class AlterWords extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML =
      `
<!-- NAVBAR -->
<top-bar src="../../index.html#welcom3"></top-bar>
<!-- ICON BEFORE SEARCHBAR -->
<div class="section-icon">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
    class="icon-section">
    <path stroke-linecap="round" stroke-linejoin="round"
      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
  </svg>

</div>
<!-- SEARCHBAR -->
<div class="searchBar">
  <input type="text" name="finder" id="finder" placeholder="Search words, slangs and more">
</div>
<!-- CARDS -->
<div class="section-cards">
  <div class="cards">

    <intro-card title="Welcome to words & more"
      description="Slangs utilizados en mensajes de texto y redes sociales. Palabras comunes con muchas variantes y frases usuales en hablantes nativos, por lo que no viene mal remplazarlas por lo clasico que enseñan en la escuela. ">
    </intro-card>

    <the-card card_name='Device' txt_pronuntiation='Di - vais' meaning_es='Dispositivo 📱' meaning='"You should connect your device to energy" ⇌ "Deberías conectar tu dispositivo a la energía"'></the-card>

    <the-card card_name='Data' txt_pronuntiation='dei - ta' meaning_es='Datos 📊' meaning='"Esta aplicación esta robando mis datos" ⇌ "This application is stealing my data"'></the-card>

    <!-- TIPS ✅ -->
    <section class="sliderTips">
      <tip-card card_title="tip"
        tip_description="El Inglés es un idioma fonetico y no todas las palabras se pronuncian como se escriben">
      </tip-card>

      <tip-card card_title="tip"
        tip_description="En Español pronunciamos tal cual leemos, y resulta un tanto dificil dar el salto">
      </tip-card>

      <tip-card card_title="tip"
        tip_description="¡Animo!, ya hablas un idioma más dificil. El Inglés es 20% más fácil que el Español">
      </tip-card>
    </section>

    <the-card card_name='Summary' txt_pronuntiation='' meaning_es='Resumen 📊' meaning='"This is a lil summary of the videos that you saw this year" ⇌ "Este es un pequeño resumen de los videos que viste este año"'></the-card>

    <the-card card_name='Assets' txt_pronuntiation='' meaning_es='activos / bienes 🗂' meaning='De alto valor o calidad:"She is an asset to the company" ⇌ "Ella es muy valiosa para la compañia"'></the-card>

    <the-card card_name='Settings' txt_pronuntiation='se - rings' meaning_es='Ajustes ⚙️' meaning='"U can turn on the dark mode on your smartphone settings" ⇌ "Puedes poner el modo obscuro en los ajustes de tu celular"'></the-card>

    <the-card card_name='Reminder' txt_pronuntiation='rhi - main - dr' meaning_es='Recordatorio ⏰' meaning='"I will do it. Lemme set a reminder in my phone" ⇌ "Lo haré. Déjame poner un recordatorio en mi teléfono"'></the-card>


    <the-card card_name="I'm pissed off" txt_pronuntiation="am  pisr - of" meaning_es="¡Estoy encabronad@! 😡"
    meaning='Sustituye a "I am so angry" y expresa coraje, de manera agresiva. "I am pissed at you" ⇌ "Estoy encabronado contigo" '>
    </the-card>

    <the-card card_name="Environment" txt_pronuntiation="in-vai-rn-mnt" meaning_es="Entorno, ambiente"
      meaning='"My environment is full of people with good vibes" ⇌ "Mi entorno está lleno de gente con buena vibra"'>
    </the-card>

    <the-card card_name="Just joshing" txt_pronuntiation="yost  yosh - in" meaning_es="Solo bromeo 😆"
      meaning='Sustituye a "Just kidding" y dejar en claro que solo estas bromeando. "Nah Im just joshing u" ⇌ "Na te creas solo te estoy ch1ng@ndo"'>
    </the-card>

    <the-card card_name="Inquisitive" txt_pronuntiation="in - ki - sitiv" meaning_es="Pregunton, muy curioso 🧐"
      meaning='"Children are naturally inquisitive." ⇌ "L@s niñ@s son naturalmente curios@s."'>
    </the-card>

    <the-card card_name="I'm bursting" txt_pronuntiation="am  brs - tin" meaning_es="¡Me estoy haciendo del baño!"
      meaning='Sustituye a "I have to go to the bathroom" pero de manera informal. "Yo, I am bursting!" ⇌ "Weey ¡Estoy cag$nd#me!"'>
    </the-card>

    <!-- TIPS✅ -->
    <section class="sliderTips">
      <tip-card card_title="homophones"
        tip_description="Los homófonos son palabras con la misma pronunciación, pero un significado distinto">
      </tip-card>

      <tip-card card_title="homophones"
        tip_description='Las palabras "Write", "Right" y "Rite(rito)" se pronuncian exactamente igual: rhait'>
      </tip-card>

      <tip-card card_title="homophones"
        tip_description='"Why" y la letra "Y" son homófonos, es común ver "y?" reemplazando a la pregunta'>
      </tip-card>
    </section>

    <!-- SLANGS  -->
    <slang-card slang_name="btw" slang_es="😬 By the way ⇌ por cierto"></slang-card>

    <slang-card slang_name="smh" slang_es="🤦 Shaking my head ⇌ mover la cabeza con desaprobación "></slang-card>

    <slang-card slang_name="np" slang_es="😌 No problem ⇌ no hay problema"></slang-card>

    <!-- TIPS✅ -->
    <section class="sliderTips">
      <tip-card card_title="homophones"
        tip_description='Las palabras "by", "bye" y "buy" son homófonos, es decir, todas suenan: bai'>
      </tip-card>

      <tip-card card_title="homophones"
        tip_description='"2" y la palabra "too" son homófonos, y en escritura informal suelen sustituirse'>
      </tip-card>

      <tip-card card_title="homophones"
        tip_description='"eye" y el pronombre "I" son homófonos, es decir, ambas suenan: ay'>
      </tip-card>
    </section>

    <the-card card_name="I'm starving" txt_pronuntiation="am  s-tharvin" meaning_es="¡Muero de hambre! 🍗"
      meaning='Sustituye a "I am so hungry", expresa un sentimiento de ansiedad por comer. "I wanna eat bruh Im starving" ⇌ "Quiero comer we, muero de hambre"'>
    </the-card>

    <the-card card_name="Knowledge" txt_pronuntiation="no - lech" meaning_es="Conocimiento 🧠"
      meaning='"You are so brilliant, you must have a lotta knowledges" ⇌ "Eres tan brillante, debes tener muchos conocimientos."'>
    </the-card>

    <the-card card_name="I would say" txt_pronuntiation="ai - gud-sei" meaning_es="Yo diría 😬"
      meaning='Sustituye a "I think", se usa antes de dar una opinión. "I would say lets do homework first" ⇌ "Yo diría que primero hagamos la tarea"'>
    </the-card>

    <!-- TIPS ✅ -->
    <section class="sliderTips">
      <tip-card card_title="tip"
        tip_description="Puedes agregar un icono de cualquier sección de Tolescro en tu pantalla de inicio 📱">
      </tip-card>

      <tip-card card_title="tip"
        tip_description='Ve al menu del navegador y da click en la opción "Agregar icono a pantalla de inicio"'>
      </tip-card>

      <tip-card card_title="😁"
        tip_description='Listo tendras un acceso directo, esto lo puedes hacer con cualquier sección'>
      </tip-card>
    </section>

    <!-- SLANG  -->
    <slang-card slang_name="pls" slang_es="🙏 Please ⇌ por favor"></slang-card>

    <slang-card slang_name="thx" slang_es="😊 Thanks ⇌ gracias"></slang-card>

    <slang-card slang_name="rn" slang_es="👇 Right now ⇌ ahora mismo"></slang-card>

    <!-- TIPS✅ -->
    <section class="sliderTips">

      <tip-card card_title="homophones"
        tip_description='La letra "U" y la palabra "you" son homófonos, de manera informal suelen sustituirse'>
      </tip-card>

      <tip-card card_title="homophones"
        tip_description='Las palabras "Good" y "Would" su pronunciación es exactamente igual: ghud'></tip-card>

      <tip-card card_title="homophones"
        tip_description='La palabra "hour" y la pertenencia "our(nuestro)" suenan igual: a-our'></tip-card>
    </section>

    <the-card card_name="Do u get me?" txt_pronuntiation="du yu get mi" meaning_es="¿Me entendiste? 🤔"
      meaning='Sustituye a "Did you understand me?" de manera informal para preguntar si hemos sido claros "So...Do you get me, right?" ⇌ "Entonces... ¿Me entiendes, verdad?"'>
    </the-card>

    <the-card card_name='Native' txt_pronuntiation='nei - rif' meaning_es='Nativa, Nativo'
      meaning='"I am a native Spanish speaker" ⇌ "Soy un hispanohablante nativo"'></the-card>

    <the-card card_name="How u doin'?" txt_pronuntiation="jau yu du-in" meaning_es="¿Cómo te va? 🤭"
      meaning='Sustituye a "How are you?" y se usa para iniciar una platica con mayor confianza y de manera más amigable. "Hey dude how u doing?"'>
    </the-card>

    <!-- TIPS✅ -->
    <section class="sliderTips">
      <tip-card card_title="Cognates"
        tip_description='Son palabras que se escriben o suenan similar en dos idiomas y significan lo mismo'>
      </tip-card>

      <tip-card card_title="False friends"
        tip_description='Son palabras que suenan o se escriben similar pero no significan lo mismo'>
      </tip-card>

      <tip-card card_title="False friends"
        tip_description='Actually ⇌ Realmente (NO actualmente) debido a que Actualmente ⇌ Currently'>
      </tip-card>
    </section>

    <the-card card_name='Should' txt_pronuntiation='sh - ud' meaning_es='Deberí a/mos/as/an/'
      meaning='"It is too late, you should sleep rn" ⇌ "Ya es muy tarde, deberías dormir ahora mismo"'></the-card>

    <the-card card_name='Could' txt_pronuntiation='kh - ud' meaning_es='Podrí a/mos/as/an/'
      meaning='"I could not do it either" ⇌ "Yo tampoco podría hacerlo", "She could get it" ⇌ "Ella podría conseguirlo"'>
    </the-card>

    <the-card card_name='Would' txt_pronuntiation='gh - ud' meaning_es='ría / haría'
      meaning='"I would like score a goal in the world cup" ⇌ "Me gustaría anotar un gol en el mundial"'></the-card>

    <!-- TIPS✅ -->
    <section class="sliderTips">
      <tip-card card_title="tip"
        tip_description='"Ya" suele ser otra manera informal de escribir o decir al pronombre "you"'>
      </tip-card>

      <tip-card card_title="tip"
        tip_description='Recuerda que los idiomas no se traducen literalmente. Algunas palabras si...'></tip-card>

      <tip-card card_title="tip"
        tip_description='pero algunas expresiones dependen de la cultura del pais o el contexto del idioma'>
      </tip-card>
    </section>

    <!-- SLANG  -->
    <slang-card slang_name="lil" slang_es="🤏 Little ⇌ Pequeñ@"></slang-card>

    <slang-card slang_name="jk" slang_es="😂 Just kidding ⇌ solo bromeo"></slang-card>

    <slang-card slang_name="ngl" slang_es="🤷 Not gonna lie ⇌ no voy a mentir"></slang-card>

    <the-card card_name="Overview" txt_pronuntiation="ow - vr - viu" meaning_es="Vistazo / Vista general"
      meaning='"Imma give u a lil overview to the project" ⇌ "Voy a darte una pequeña descripción general del proyecto."'>
    </the-card>

    <the-card card_name='Enhance' txt_pronuntiation='in - hans' meaning_es='Incrementar / Intensificar'
      meaning='"I want to enhance my English, to talk with native speakers" ⇌ "Quiero mejorar mi Inglés para platicar con hablantes nativos"'>
    </the-card>

    <the-card card_name='I Thought'
      txt_pronuntiation='thot "saca el aire, con la lengua pegada a los dientes de arriba"' meaning_es='Pensé'
      meaning='"He thought he could do it" ⇌ "El pensó que podría hacerlo"'></the-card>

    <!-- SLANG  -->
    <slang-card slang_name="nvm" slang_es="Never mind ⇌ No importa, olvidalo"></slang-card>

    <slang-card slang_name="fr" slang_es="For real ⇌ De verdad"></slang-card>

    <slang-card slang_name="tbh" slang_es="To be honest ⇌ para ser honest@"></slang-card>

    <the-card card_name='Commitment' txt_pronuntiation='co - mid - ment' meaning_es='Compromiso / Dar tu palabra'
      meaning='"I am sorry, I already have a commitment to my family" ⇌ "Lo siento, ya tengo un compromiso con mi familia"'>
    </the-card>

    <the-card card_name='Between' txt_pronuntiation='bi - thuin' meaning_es='Entre / en medio de'
      meaning='"Guess her/his age, is between 18 and 27" ⇌ "Adivina su edad, es entre 18 y 27"'></the-card>

    <the-card card_name='Effortless' txt_pronuntiation='eforh - les'
      meaning_es='Sin mayor esfuerzo / Poco esfuerzo / Sin esfuerzo aparente'
      meaning='"I made no efforless to bench 225lb" ⇌ "No hice ningún esfuerzo para levantar 115kg"'></the-card>

    <!-- SLANG  -->
    <slang-card slang_name="lmfao" slang_es="🤣 Laughing my fr3@king ass off ⇌ me cago de la risa"></slang-card>

    <slang-card slang_name="hbd" slang_es="🎁 Happy birthday ⇌ Feliz cumpleaños"></slang-card>

    <slang-card slang_name="wdym?" slang_es="🤔 What do you mean? ⇌ ¿A que te refieres?, ¿Qué quieres decir?">
    </slang-card>

    <the-card card_name='Storage' txt_pronuntiation='s - to - rech' meaning_es='Almacenamiento'
      meaning='"The storage in my cellphone is completely full" ⇌ "El almacenamiento en mi celular está completamente lleno"'>
    </the-card>

    <the-card card_name='Measure' txt_pronuntiation='me - shu - r' meaning_es='Medida'
      meaning='"The measure of earth can be measured in Kilometers" ⇌ "La medida de la tierra se puede medir en kilómetros"'>
    </the-card>

    <the-card card_name='Through' txt_pronuntiation='thru' meaning_es='A través de / Mediante'
      meaning='"I sent you a gift through delivery" ⇌ "Te envié un regalo mediante paqueteria"'></the-card>

    <!-- SLANG  -->
    <slang-card slang_name="wyd?" slang_es="What you doing? ⇌ ¿Qué haces?"></slang-card>

    <slang-card slang_name="lmk" slang_es="😉 Let me know ⇌ Házmelo saber"></slang-card>

    <slang-card slang_name="idts" slang_es="🤔 I donot think so ⇌ No lo creo, no pienso lo mismo"></slang-card>

    <the-card card_name='Throw' txt_pronuntiation='dhrow' meaning_es='Arrojar / Lanzar'
      meaning='"Patrick throwed a perfect pass on second half" ⇌ "Patrick lanzó un pase perfecto en la segunda mitad"'>
    </the-card>

    <the-card card_name='Though' txt_pronuntiation='dho' meaning_es='Aunque / Sin embargo'
      meaning='"I am into him/her, though he makes me angry sometimes" ⇌ "Me gusta, aunque a veces me hace enojar"'>
    </the-card>

    <the-card card_name='Improve' txt_pronuntiation='im - pruv' meaning_es='Mejorar / Aumentar'
      meaning='"I love English and i work hard to improve my knowledge" ⇌ "Me encanta el inglés y trabajo duro para mejorar mis conocimientos."'>
    </the-card>

    <!-- SLANG -->
    <slang-card slang_name="Tryna" slang_es="Trying to ⇌ Tratando de..."></slang-card>

    <slang-card slang_name="Hafta" slang_es="Have to ⇌ Tener que..."></slang-card>

    <slang-card slang_name="Outta" slang_es="Out of ⇌ Fuera de..."></slang-card>

    <the-card card_name='Behavior' txt_pronuntiation='bi - hey -viur' meaning_es='Comportamiento / Conducta'
      meaning='"Your behavior is disgusting, calm down" ⇌ "Tu comportamiento es desagradable, cálmate"'></the-card>

    <the-card card_name='Childhood' txt_pronuntiation='cha - il - jud' meaning_es='Infancia'
      meaning='"Not gonna lie, I had a lovely childhood" ⇌ "No lo negaré, tuve una infancia hermosa"'></the-card>

    <the-card card_name='Weird' txt_pronuntiation='wi - rd' meaning_es='Raro / Extraño'
      meaning='"Bro dont get me wrong, but u are kinda weird" ⇌ "Wey no me malinterpretes, pero eres un poco rar@"'>
    </the-card>

    <!-- SLANG -->
    <slang-card slang_name="Gonna" slang_es="Going to ⇌ Voy a / vas a / va a / van a"></slang-card>

    <slang-card slang_name="Kinda" slang_es="Kind of ⇌ Más o menos"></slang-card>

    <slang-card slang_name="Imma" slang_es="Im gonna ⇌ Voy a..."></slang-card>

    <the-card card_name='Naturally' txt_pronuntiation='na - chr - li' meaning_es='Naturalmente'
      meaning='"She/He has naturally curly hair" ⇌ "Ella/El tiene el cabello naturalmente rizado."'></the-card>

    <the-card card_name='Brilliant' txt_pronuntiation='bri - liant' meaning_es='Brillante'
      meaning='"Yea u right, u are so brilliant!" ⇌ "Sí, tienes razón, eres tan brillante."'></the-card>

    <the-card card_name='Vibes' txt_pronuntiation='va - ibs' meaning_es='Vibras'
      meaning='"I send my good vibes to the Mexican team in the World Cup" ⇌ "Le mando mis buenas vibras a la seleccion Mexicana en el mundial"'>
    </the-card>

    <!-- SLANG -->
    <slang-card slang_name="Wanna" slang_es="Want to ⇌ Quiero/es, quiere/n / queremos"></slang-card>

    <slang-card slang_name="Gotta" slang_es="Have got to ⇌ Tener que"></slang-card>

    <slang-card slang_name="Gimme" slang_es="Give me ⇌ Dame (un minuto, tiempo, la oportunidad. etc.)"></slang-card>

    <the-card card_name="By all means" txt_pronuntiation="bye ol mins" meaning_es="Por supuesto / Claro que si 😁"
      meaning='Sustituye a "yes, of course" o "sure". "By all means! I will be there, just just lemme know" ⇌ "Por supuesto que estaré ahí, solo hazmelo saber"'>
    </the-card>

    <the-card card_name="Lovely" txt_pronuntiation="lof-li" meaning_es="Encantador/a, precioso/a "
      meaning='Sustituye a "beautiful" y describe algo es lindo o se ve bien. "Oh thank u, u are so lovely" ⇌ "Oh gracias eres tan encantador/a"'>
    </the-card>

    <the-card card_name='Likewise' txt_pronuntiation='laik-guais' meaning_es='Asimismo ☝🏼'
      meaning='Sustituye a "also". de manera más formal. "Likewise, we must deliver it signed" ⇌ "Así mismo, debemos entregarla firmada"'>
    </the-card>

    <!-- SLANG -->
    <slang-card slang_name="Lemme" slang_es="Let me ⇌ Déjame (mostrarte, adivinar, ver, probar, etc.)"></slang-card>

    <slang-card slang_name="Dunno" slang_es="Donot know ⇌ No lo se / sabemos / saben / sabes / sabe 🤔"></slang-card>

    <slang-card slang_name="Lotta" slang_es="Lot of ⇌ Mucho / Bastante de..."></slang-card>

    <the-card card_name='However' txt_pronuntiation='jauever' meaning_es='Sin embargo 😕'
      meaning='Sustituye a "but" a manera más formal. "I love code, however, is complicated" ⇌ "Me encanta programar, sin embargo, es complicado."'>
    </the-card>

    <the-card card_name="Wallpaper" txt_pronuntiation="guol - peipr" meaning_es="Fondo de pantalla"
      meaning='"Hey babe, look at my new wallpaper, It is you!" ⇌ "Oye nena, mira mi nuevo fondo de pantalla, ¡Eres tú!"'>
    </the-card>

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
      <p>¡Nuevas cartas vendrán pronto!</p>
    </div>

  </div> <!-- cards -->
</div>

<footer>&copy; 2022, Tolescro</footer>
`;
  }
} // class

window.customElements.define("class-alterwords", AlterWords);