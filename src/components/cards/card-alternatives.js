'use strict';

const tCards = [
  { cn: "Within", pro: "wi - din", es: "Dentro / en (tiempo)", ex: "I called the ambulance, gonna arrive within 10 minutes ⇌ Llamé a la ambulancia, llegará dentro de 10 minutos" },
  { cn: "Kidnap", pro: "kid - nap", es: "Secuestrar", ex: "Kidnapping are common on this country unfortunately ⇌ Desafortunadamente, los secuestros son comunes en este país" },
  { cn: "smh", pro: "sheik mai jed", es: "Shaking my head ⇌ mover la cabeza con desaprobación", ex: "That comment was so immature, smh 🤦 ⇌ Ese comentario fue tan inmaduro, no lo puedo creer" },
  { cn: "Device", pro: "Di - vais", es: "Dispositivo", ex: "You should connect your device to energy ⇌ Deberías conectar tu dispositivo a la energía" },
  { cn: "af", pro: "as fock", es: "As fuck ⇌ ¡Como la mi3rd@!", ex: "I fell on my skateboard and my wound hurts af ⇌ Me caí en la patineta y la herida me duele como la mi3rd@" },
  { cn: "Data", pro: "dei - ta", es: "Datos", ex: "Esta aplicación esta robando mis datos ⇌ This application is stealing my data" },
  { cn: "Summary", pro: "so - mha - rhi", es: "Resumen", ex: "This is a lil summary of the videos that you saw this year ⇌ Este es un pequeño resumen de los videos que viste este año" },
  { cn: "btw", pro: "bye de wey", es: "by the way ⇌ por cierto", ex: "btw, I wanted to ask u... Do u wanna go out tonight? ⇌ Por cierto queria preguntarte... ¿Quieres salir esta noche?" },
  { cn: "Assets", pro: "asset / assets", es: "Activos / bienes de alto valor o calidad", ex: "She is an asset to the company ⇌ Ella es muy valiosa para la compañia" },
  { cn: "Settings", pro: "se - rings", es: "Ajustes", ex: "U can turn on the dark mode on your smartphone settings ⇌ Puedes poner el modo obscuro en los ajustes de tu celular" },
  { cn: "Reminder", pro: "rhi - main - dr", es: "Recordatorio", ex: "I will do it. Lemme set a reminder in my phone ⇌ Lo haré. Déjame poner un recordatorio en mi teléfono" },
  { cn: "I'm pissed off", pro: "am  pisr - of", es: "¡Estoy encabronad@!", ex: "Sustituye a I am so angry y expresa coraje, de manera agresiva. I am pissed at you ⇌ Estoy encabronado contigo" },
  { cn: "Achievements", pro: "ah - chiv - menths", es: "Logros alcanzados", ex: "My best achievement have been to learn three languages ⇌ Mi mayor logro ha sido aprender tres idiomas" },
  { cn: "np", pro: "nou prablm", es: "No problem ⇌ no hay problema", ex: "Np, u don't need to apologize, just do things carefully ⇌ No hay problema, no necesitas disculparte, solo haz las cosas con cuidado" },
  { cn: "Environment", pro: "in-vai-rn-mnt", es: "Entorno, ambiente", ex: "My environment is full of people with good vibes ⇌ Mi entorno está lleno de gente con buena vibra" },
  { cn: "Just joshing", pro: "ost  yosh - in", es: "Solo bromeo", ex: "Sustituye a Just kidding y dejar en claro que solo estas bromeando. Nah Im just joshing u ⇌ Na te creas solo te estoy ch1ng@ndo" },
  { cn: "Inquisitive", pro: "in - ki - sitiv", es: "Preguntona, muy curiosa", ex: "Children are naturally inquisitive ⇌ Los niños son naturalmente curiosos" },
  { cn: "pls", pro: "plis", es: "Please ⇌ por favor", ex: "Could you remind me that I have to put on the ointment pls? ⇌ ¿Podrias recordarme que tengo que ponerme la pomada porfavor?" },
  { cn: "I'm bursting", pro: "am  brs - tin", es: "¡Me estoy haciendo del baño!", ex: "Sustituye a I have to go to the bathroom pero de manera informal. Brh, I am bursting! ⇌ Weey ¡Estoy cag$nd#me!" },
  { cn: "I'm starving", pro: "am  s-tharvin", es: "¡Muero de hambre!", ex: "Sustituye a I am so hungry, expresa un sentimiento de ansiedad por comer. I wanna eat bruh Im starving ⇌ Quiero comer we, muero de hambre" },
  { cn: "thx", pro: "thenks", es: "Thanks ⇌ gracias", ex: "Thx, this article that you sent me was really helpful ⇌ Gracias, en verdad me fue de mucha ayuda este articulo que me mandaste" },
  { cn: "Knowledge", pro: "no - lech", es: "Conocimiento", ex: "You are so brilliant, you must have a lotta knowledges ⇌ Eres tan brillante, debes tener muchos conocimientos" },
  { cn: "I would say", pro: "ai - gud-sei", es: "Yo diría", ex: "Sustituye a I think, se usa antes de dar una opinión. I would say lets do homework first ⇌ Yo diría que primero hagamos la tarea" },
  { cn: "Do u get me?", pro: "du yu get mi", es: "¿Me entendiste?", ex: "Sustituye a Did you understand me? de manera informal, para preguntar si hemos sido claros So...Do you get me, right? ⇌ Mmm... ¿Me entiendes, verdad?" },
  { cn: "rn", pro: "rhait nau", es: "Right now ⇌ ahora mismo", ex: "I'm sorry I have to take my sister to school rn, see u ⇌ Lo siento tengo que llevar a mi hermana a la escuela ahora mismo, nos vemos" },
  { cn: "Native", pro: "nei - rif", es: "Nativa / Nativo", ex: "I am a native Spanish speaker ⇌ Soy un hispanohablante nativo" },
  { cn: "How u doing?", pro: "jau yu du-in", es: "¿Cómo te va?", ex: "Sustituye a How are you? y se usa para iniciar una platica con mayor confianza y de manera más amigable. Hey mate, how u doin'?" },
  { cn: "Should", pro: "sh - ud", es: "Deberí a/mos/as/an/", ex: "It is too late, you should sleep rn ⇌ Ya es muy tarde, deberías dormir ahora mismo" },
  { cn: "Could", pro: "kh - ud", es: "Podrí a/mos/as/an/", ex: "I could not do it either ⇌ Yo tampoco podría hacerlo, She could get it ⇌ Ella podría conseguirlo" },
  { cn: "Would", pro: "gh - ud", es: "ría / haría", ex: "I would like score a goal in the world cup ⇌ Me gustaría anotar un gol en el mundial" },
  { cn: "lil", pro: "li - rl", es: "Little ⇌ Pequeñx", ex: "U can take a lil break, you've worked so hard ⇌ Puedes tomar un pequeño descanso, haz trabajado muy duro" },
  { cn: "Overview", pro: "ow - vr - viu", es: "Vistazo / Vista general", ex: "Imma give u a lil overview to the project ⇌ Voy a darte una pequeña descripción general del proyecto" },
  { cn: "Enhance", pro: "in - hans", es: "Incrementar / Intensificar", ex: "I want to enhance my English, to talk with native speakers ⇌ Quiero mejorar mi Inglés para platicar con hablantes nativos" },
  { cn: "jk", pro: "yost kirin", es: "Just kidding ⇌ solo bromeo", ex: "jkjkjkjk don't take it personally, u 'now I like to joke ⇌ Estoy jugando jaja no te lo tomes personal, sabes que me gusta bromear" },
  { cn: "I Thought", pro: "thot (saca el aire, con la lengua pegada a los dientes de arriba)", es: "Pensé", ex: "He thought he could do it ⇌ El pensó que podría hacerlo" },
  { cn: "Commitment", pro: "co - mid - ment", es: "Compromiso / Dar tu palabra", ex: "I am sorry, I already have a commitment to my family ⇌ Lo siento, ya tengo un compromiso con mi familia" },
  { cn: "Between", pro: "bi - thuin", es: "Entre / en medio de", ex: "Guess her/his age, is between 18 and 27 ⇌ Adivina su edad, es entre 18 y 27" },
  { cn: "Lotta", pro: "lo - ra", es: "Lot of ⇌ Mucho / Bastante de", ex: "I have a lotta friends and unfortunately none of them came to the party ⇌ Tengo un montón de amigos y desafortunadamente ninguno vino a la fiesta" },
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
  { cn: "Dunno", pro: "ai dhunow", es: "I donot know ⇌ no lo se", ex: "I dunno how that got there, I was out of the house all day ⇌ Realmente no sé cómo llegó eso ahí, estuve todo el dia fuera de casa" },
  { cn: "ngl", pro: "not gona lai", es: "Not gonna lie ⇌ no voy a mentir", ex: "Ngl, that dress looks gorgeous on you, in my opinion ⇌ No lo puedo negar ese vestido se te ve hermoso a mi parecer" },
  { cn: "Lemme", pro: "lemi", es: "Let me ⇌ Déjame (mostrarte, adivinar, ver, probar, etc.)", ex: "Lemme show u, why you should study English and all its benefits ⇌ Dejame mostrarte por que deberias estudiar ingles y todos sus beneficios" },
  { cn: "nvm", pro: "nhevr maind", es: "Never mind ⇌ no importa, olvidalo", ex: "Don't forget to bring what I asked for, hmm nvm, I'll go at night ⇌ No olvides traer lo que te pedi, mmm bueno no olvidalo, yo voy en la noche" },
  { cn: "Kinda", pro: "khainda", es: "Kind of ⇌ Más o menos", ex: "The weather is kinda strange, we are at 25 degrees but is cold af! ⇌ El clima esta algo raro, estamos a 25 grados, pero hace un frio para morirse" },
  { cn: "Gimme", pro: "Gimi", es: "Give me ⇌ dame (un minuto, tiempo, la oportunidad. etc.)", ex: "Come on dude gimme 2 more days, and I will pay u everything u lent me ⇌ Vamos amigo dame 2 días más y te pagaré todo lo que me prestaste" },
  { cn: "fr", pro: "fr rhil", es: "For real ⇌ de verdad", ex: "Brh I hate this school fr! we pay too much and the quality is lousy ⇌ Amigo odio esta escuela, de verdad, pagamos demasiado y la calidad es pésima " },
  { cn: "tbh", pro: "thu bi onest", es: "To be honest ⇌ Para ser honesto/a", ex: "Tbh, I haven't been able to reply to u because I've been, extremely busy ⇌ Para ser honesto, no he podido responderte porque he estado sumamente ocupado" },
  { cn: "Gotta", pro: "gora", es: "Have got to ⇌ Tener que", ex: "I'm sorry, I gotta go, my aunt is sick and I hafta take care of her ⇌ Lo siento, tengo que irme, mi tía esta enferma y tengo que cuidarla" },
  { cn: "wdym?", pro: "guat du iu min?", es: "What do you mean? ⇌ ¿A que te refieres?, ¿Qué quieres decir?", ex: "Bro I didn't catch what you said, what do you mean? ⇌ Hermano no entendí lo que dijiste, ¿A qué te refieres?" },
  { cn: "wyd?", pro: "guat iu duin", es: "What you doing? ⇌ ¿Qué haces?", ex: "Sorry for the delay, I was working, wyd rn? ⇌ Perdón por la demora estaba trabajando, ¿Qué estas haciendo ahorita?" },
  { cn: "wby?", pro: "guat baut iu?", es: "What about you? ⇌ ¿Y tu? / ¿Qué hay de ti?", ex: "I'm pretty good bud, thx for ask, wbu? ⇌ Estoy muy bien amigo gracias, ¿Y tú?" },
  { cn: "lmk", pro: "let mi nou", es: "Let me know ⇌ Házmelo saber", ex: "Go eat buddy, when you're done, we play, just lmk ⇌ Ve a comer we, cuando termines jugamos, solo avisame" },
  { cn: "idts", pro: "ai dont dhink so", es: "I donot think so ⇌ No lo creo / no pienso lo mismo", ex: "Idts, I mean it's a good point but I would say ask him first ⇌ No lo creo, es decir es un buen punto pero yo diría que primero le preguntes" },
  { cn: "Tryna", pro: "thraina", es: "Trying to ⇌ Tratando de...", ex: "I don't give a fuck about your opinion, I'm tryna do this for myself ⇌ No me importa un carajo tu opinión, estoy tratando de hacer esto por mí misma" },
  { cn: "Imma", pro: "ama", es: "I'm gonna(going to) ⇌ Voy a...", ex: "Hold on Imma be back real quick, Imma have dinner with my parents ⇌ Aguanta, vuelvo en seguida, voy a cenar con mis padres." },
  { cn: "Gonna", pro: "gona", es: "Going to ⇌ Voy a / vas a / va a / van a", ex: "She's gonna buy the brand-new iPhone 15 in september ⇌ Ella va a comprar el nuevo iPhone 15 en septiembre." },
  /*
  { cn: "Hafta", pro: "", es: "Have to ⇌ Tener que...", ex: " ⇌ " },
  { cn: "Outta", pro: "", es: "Out of ⇌ Fuera de...", ex: " ⇌ " },
  { cn: "Wanna", pro: "", es: "Want to ⇌ Quiero/es, quiere/n / queremos", ex: " ⇌ " },

  
  // { cn: "", pro: "", es: "", ex: " ⇌ " },
  */
];
let outputTCards = '';
let arrSize, randomNumber, index;

for (arrSize = tCards.length; arrSize; arrSize--) {
  randomNumber = Math.floor(Math.random() * arrSize);
  index = tCards[arrSize - 1];
  tCards[arrSize - 1] = tCards[randomNumber];
  tCards[randomNumber] = index;
}

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
/*
function checkVisibility(entries) {
  let entry = entries;
  if (entry.isIntersecting) {
    console.log('El elemento es visible');
  } else {
    console.log('El elemento no es visible');
  }
}
let observer = new IntersectionObserver(checkVisibility, {})
let cody = document.querySelector('.card');
observer.observe(cody);
*/
/*
class TCards extends HTMLElement {
  constructor() {
    super();
    this.cn;
    this.pro;
    this.es;
    this.ex;
  }

  static get observedAttributes() {
    return ['cn", 'pro", 'es", 'ex'];
  }

  attributeChangedCallback(Attr, oldValue, newValue) {
    if (Attr == 'cn') {
      this.cn = newValue;
    }
    if (Attr == 'pro') {
      this.pro = newValue;
    }
    if (Attr == 'es') {
      this.es = newValue;
    }
    if (Attr == 'ex') {
      this.ex = newValue;
    }
  }

  connectedCallback() {
    this.innerHTML =
    `<div class='card'>
      <h1 class='title-card'>${this.cn}</h1>
      <ul>
        <li>
          <div class='list-header'>
            <ion-icon class='card-svg' name='mic-outline'></ion-icon>
            <h4>Pronunciation</h4>
          </div>
          <p>${this.pro}</p>
        </li>

        <li>
          <div class='list-header'>
            <ion-icon class='card-svg' name='language-outline'></ion-icon>
            <h4>Reverse context</h4>
          </div>
          <p>${this.es}</p>
        </li>

        <li>
          <div class='list-header'>
            <ion-icon class='card-svg' name='extension-puzzle-outline'></ion-icon>  
            <h4>Example</h4>
          </div>
          <p>${this.ex}</p>
        </li>
      </ul>
    </div>`;
  }
}
window.customElements.define('t-card", TCards);
*/