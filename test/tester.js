'use strict';

let outputTest = '';

for (let indx = 0; indx < arrTest.length; indx++) {
  outputTest += ` 
    <div class="card">
        <h1 class="title-card">${arrTest[indx].cn}</h1>
        <ul>
          <li>
            <div class="list-header">
              <ion-icon class="card-svg" name="mic-outline"></ion-icon>
              <h4>Pronunciation</h4>
            </div>
            <p>${arrTest[indx].pro}</p>
          </li>
  
          <li>
            <div class="list-header">
              <ion-icon class="card-svg" name="language-outline"></ion-icon>
              <h4>Reverse context</h4>
            </div>
            <p>${arrTest[indx].es}</p>
          </li>
  
          <li>
            <div class="list-header">
              <ion-icon class="card-svg" name="extension-puzzle-outline"></ion-icon>             
              <h4>Example</h4>
            </div>
            <p>${arrTest[indx].ex}</p>
          </li>
        </ul>
    </div>`
}
document.querySelector('.cards').innerHTML = outputTest;


/*
const arrTest = [
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
  { cn: "Could", pro: "kh - ud", es: "Podrí a/mos/as/an/", ex: "I could not do it either ⇌ Yo tampoco podría hacerlo, She could get it ⇌ Ella podría conseguirlo" }  
];
*/
