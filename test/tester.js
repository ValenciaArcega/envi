'use strict';

const tCards = [
  { cn: "Within", pro: "wi - din", es: "Dentro / en (tiempo)", ex: "I called the ambulance, gonna arrive within 10 minutes ⇌ Llamé a la ambulancia, llegará dentro de 10 minutos" },
  { cn: "Achievements", pro: "ah - chiv - menths", es: "Logros alcanzados", ex: "My best achievement have been to learn three languages ⇌ Mi mayor logro ha sido aprender tres idiomas" },
  { cn: "Kidnap", pro: "kid - nap", es: "Secuestrar", ex: "Kidnapping are common on this country unfortunately ⇌ Desafortunadamente, los secuestros son comunes en este país" },
  { cn: "Device", pro: "Di - vais", es: "Dispositivo", ex: "You should connect your device to energy ⇌ Deberías conectar tu dispositivo a la energía" },
  { cn: "Data", pro: "dei - ta", es: "Datos", ex: "Esta aplicación esta robando mis datos ⇌ This application is stealing my data" },
  { cn: "Summary", pro: "so - mha - rhi", es: "Resumen", ex: "This is a lil summary of the videos that you saw this year ⇌ Este es un pequeño resumen de los videos que viste este año" },
  { cn: "Assets", pro: "asset / assets", es: "Activos / bienes de alto valor o calidad", ex: "She is an asset to the company ⇌ Ella es muy valiosa para la compañia" },
  { cn: "Settings", pro: "se - rings", es: "Ajustes", ex: "U can turn on the dark mode on your smartphone settings ⇌ Puedes poner el modo obscuro en los ajustes de tu celular" },
  { cn: "Reminder", pro: "rhi - main - dr", es: "Recordatorio", ex: "I will do it. Lemme set a reminder in my phone ⇌ Lo haré. Déjame poner un recordatorio en mi teléfono" },
  { cn: "I'm pissed off", pro: "am  pisr - of", es: "¡Estoy encabronad@!", ex: "Sustituye a I am so angry y expresa coraje, de manera agresiva. I am pissed at you ⇌ Estoy encabronado contigo" },
  { cn: "Environment", pro: "in-vai-rn-mnt", es: "Entorno, ambiente", ex: "My environment is full of people with good vibes ⇌ Mi entorno está lleno de gente con buena vibra" },
  { cn: "Just joshing", pro: "ost  yosh - in", es: "Solo bromeo", ex: "Sustituye a Just kidding y dejar en claro que solo estas bromeando. Nah Im just joshing u ⇌ Na te creas solo te estoy ch1ng@ndo" },
  { cn: "Inquisitive", pro: "in - ki - sitiv", es: "Preguntona, muy curiosa", ex: "Children are naturally inquisitive ⇌ Los niños son naturalmente curiosos" },
  { cn: "I'm bursting", pro: "am  brs - tin", es: "¡Me estoy haciendo del baño!", ex: "Sustituye a I have to go to the bathroom pero de manera informal. Brh, I am bursting! ⇌ Weey ¡Estoy cag$nd#me!" },
  { cn: "I'm starving", pro: "am  s-tharvin", es: "¡Muero de hambre!", ex: "Sustituye a I am so hungry, expresa un sentimiento de ansiedad por comer. I wanna eat bruh Im starving ⇌ Quiero comer we, muero de hambre" },
  { cn: "Knowledge", pro: "no - lech", es: "Conocimiento", ex: "You are so brilliant, you must have a lotta knowledges ⇌ Eres tan brillante, debes tener muchos conocimientos" },
  { cn: "I would say", pro: "ai - gud-sei", es: "Yo diría", ex: "Sustituye a I think, se usa antes de dar una opinión. I would say lets do homework first ⇌ Yo diría que primero hagamos la tarea" },
  { cn: "Do u get me?", pro: "du yu get mi", es: "¿Me entendiste?", ex: "Sustituye a Did you understand me? de manera informal, para preguntar si hemos sido claros So...Do you get me, right? ⇌ Mmm... ¿Me entiendes, verdad?" },
  { cn: "Native", pro: "nei - rif", es: "Nativa / Nativo", ex: "I am a native Spanish speaker ⇌ Soy un hispanohablante nativo" },
  { cn: "How u doing?", pro: "jau yu du-in", es: "¿Cómo te va?", ex: "Sustituye a How are you? y se usa para iniciar una platica con mayor confianza y de manera más amigable. Hey mate, how u doin'?" },
  { cn: "Should", pro: "sh - ud", es: "Deberí a/mos/as/an/", ex: "It is too late, you should sleep rn ⇌ Ya es muy tarde, deberías dormir ahora mismo" },
  { cn: "Could", pro: "kh - ud", es: "Podrí a/mos/as/an/", ex: "I could not do it either ⇌ Yo tampoco podría hacerlo, She could get it ⇌ Ella podría conseguirlo" },
  { cn: "Would", pro: "gh - ud", es: "ría / haría", ex: "I would like score a goal in the world cup ⇌ Me gustaría anotar un gol en el mundial" },
  { cn: "Overview", pro: "ow - vr - viu", es: "Vistazo / Vista general", ex: "Imma give u a lil overview to the project ⇌ Voy a darte una pequeña descripción general del proyecto" },
  { cn: "Enhance", pro: "in - hans", es: "Incrementar / Intensificar", ex: "I want to enhance my English, to talk with native speakers ⇌ Quiero mejorar mi Inglés para platicar con hablantes nativos" },
  { cn: "I Thought", pro: "thot (saca el aire, con la lengua pegada a los dientes de arriba)", es: "Pensé", ex: "He thought he could do it ⇌ El pensó que podría hacerlo" },
  { cn: "Commitment", pro: "co - mid - ment", es: "Compromiso / Dar tu palabra", ex: "I am sorry, I already have a commitment to my family ⇌ Lo siento, ya tengo un compromiso con mi familia" },
  { cn: "Between", pro: "bi - thuin", es: "Entre / en medio de", ex: "Guess her/his age, is between 18 and 27 ⇌ Adivina su edad, es entre 18 y 27" },
  { cn: "Effortless", pro: "eforh - les", es: "Sin mayor esfuerzo / Poco esfuerzo / Sin esfuerzo aparente", ex: "I made no efforless to bench 225lb ⇌ No hice ningún esfuerzo para levantar 115kg" },
  { cn: "Storage", pro: "s - to - rech", es: "Almacenamiento", ex: "The storage in my cellphone is completely full ⇌ El almacenamiento en mi celular está completamente lleno" },
  { cn: "Measure", pro: "me - shu - r", es: "Medida", ex: "The measure of earth can be measured in Kilometers ⇌ La medida de la tierra se puede medir en kilómetros" },
  { cn: "Through", pro: "thru", es: "A través de / Mediante", ex: "I sent you a gift through delivery ⇌ Te envié un regalo mediante paqueteria" },
  { cn: "Throw", pro: "dhrow", es: "Arrojar / Lanzar", ex: "Patrick throwed a perfect pass on second half ⇌ Patrick lanzó un pase perfecto en la segunda mitad" },
  { cn: "Though", pro: "dho", es: "Aunque / Sin embargo", ex: "I am into him/her, though he makes me angry sometimes ⇌ Me gusta, aunque a veces me hace enojar" },
  { cn: "Improve", pro: "im - pruv", es: "Mejorar / Aumentar", ex: "I love English and work hard to improve my knowledges ⇌ Me encanta el inglés y estudiar duro para mejorar mis conocimientos" },
  { cn: "Behavior", pro: "bi - hey -viur", es: "Comportamiento / Conducta", ex: "Your behavior is disgusting, calm down ⇌ Tu comportamiento es desagradable, cálmate" },
  { cn: "Childhood", pro: "cha - il - jud", es: "Infancia", ex: "Not gonna lie, I had a lovely childhood ⇌ No lo negaré, tuve una infancia hermosa" },
  { cn: "Weird", pro: "wi - rd", es: "Raro / Extraño", ex: "Bro dont get me wrong, but u are kinda weird ⇌ Wey no me malinterpretes, pero eres un poco raro" },
  { cn: "Naturally", pro: "na - chr - li", es: "Naturalmente", ex: "She/He has naturally curly hair ⇌ Ella/El tiene el cabello naturalmente rizado" },
  { cn: "Brilliant", pro: "bri - liant", es: "Brillante", ex: "Yea u right, u are so brilliant! ⇌ Sí, tienes razón, eres tan brillante" },
  { cn: "Vibes", pro: "va - ibs", es: "Vibras", ex: "I send my good vibes to the Mexican team in the World Cup ⇌ Le mando mis buenas vibras a la seleccion Mexicana en el mundial" },
  { cn: "By all means", pro: "bye ol mins", es: "Por supuesto / Claro que si", ex: "Sustituye a yes, of course o sure. By all means! I will be there, just just lemme know ⇌ Por supuesto que estaré ahí, solo hazmelo saber" },
  { cn: "Lovely", pro: "lof - li", es: "Encantador/a, precioso/a", ex: "Sustituye a beautiful y describe algo es lindo o se ve bien. Oh thank u, u are so lovely ⇌ Oh gracias eres tan encantador/a" },
  { cn: "Likewise", pro: "laik - guais", es: "Asimismo", ex: "Sustituye a also. de manera más formal. Likewise, we must deliver it signed ⇌ Así mismo, debemos entregarla firmada" },
  { cn: "However", pro: "jau - ever", es: "Sin embargo", ex: "Sustituye a but a manera más formal. I love code, however, is complicated ⇌ Me encanta programar, sin embargo, es complicado" },
  { cn: "Wallpaper", pro: "guol - peipr", es: "Fondo de pantalla", ex: "Hey babe, look at my new wallpaper, It is you! ⇌ Oye nena, mira mi nuevo fondo de pantalla, ¡Eres tú!" },
  
  { cn: "", pro: "", es: "", ex: "" },
];

let outputTCards = '';

for (let tc = 0; tc < tCards.length; tc++) {
  outputTCards += ` 
    <div class="card">
        <h1 class="title-card">${tCards[tc].cn}</h1>
        <ul>
          <li>
            <div class="list-header">
              <ion-icon class="card-svg" name="mic-outline"></ion-icon>
              <h4>Pronunciation</h4>
            </div>
            <p>${tCards[tc].pro}</p>
          </li>
  
          <li>
            <div class="list-header">
              <ion-icon class="card-svg" name="language-outline"></ion-icon>
              <h4>Reverse context</h4>
            </div>
            <p>${tCards[tc].es}</p>
          </li>
  
          <li>
            <div class="list-header">
              <ion-icon class="card-svg" name="extension-puzzle-outline"></ion-icon>             
              <h4>Example</h4>
            </div>
            <p>${tCards[tc].ex}</p>
          </li>
        </ul>
    </div>`
}
document.querySelector('.cards').innerHTML = outputTCards;