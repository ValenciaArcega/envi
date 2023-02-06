'use strict';

let outputPhrasalV = '';
const phrasalVerbs = [
  { cn: "Cut in", pro: "coth in", es: "Interrumpir, cortar", ex: "Oh sorry if I cutting in, I gotta go right now! ⇌ ¡Oh, lo siento si interrumpo, tengo que irme ahora mismo!" },
  { cn: "Work out", pro: "wuork aut", es: "Ejercicio físico / Entrenamiento", ex: "Sorry I wont be able to come to the party. I have to work out, today is legs day ⇌ Lo siento, no podré ir a la fiesta. Tengo que hacer ejercicio, hoy es día de pierna" },
  { cn: "Warm up", pro: "guarm up", es: "Calentamiento", ex: "I did not warm up enough before work out, and now I got injured ⇌ No calenté lo suficiente antes de hacer ejercicio y ahora me lesioné" },
  { cn: "Tell off", pro: "thel of", es: "Regañar", ex: "Ima tell u off when we get home ⇌ Vas a ver cuando lleguemos a la casa" },
  { cn: "Keep away", pro: "kip awey", es: "Alejar, mantener alejado", ex: "I have to keep she away, cuz she just hurts me ⇌ Tengo que mantenerla alejada, porque solo me hace daño" },
  { cn: "Come from", pro: "khom  from", es: "Ser originario de", ex: "He does not speak spanish \'cause he comes from abroad ⇌ El no habla español porque viene del extranjero" },
  { cn: "Give in", pro: "Giv in", es: "Rendirse / Darse por vencido", ex: "I cannot do that, Imma just give in Im sorry ⇌ No puedo hacerlo, voy a rendirme lo siento" },
  { cn: "Keep on", pro: "kip on", es: "Seguir, continuar", ex: "U must to keep on working hard to grow yourself ⇌ Debes seguir trabajando duro para crecer" },
  { cn: "Give away", pro: "Giv awey", es: "Donar / Regalar", ex: "My sister gave money away to help abandoned puppies ⇌ Mi hermana donó dinero para ayudar a cachorritos abandonados" },
  { cn: "Keep up", pro: "Kip op", es: "Mantenerse al día", ex: "I have to keep up, cuz the technology never stop ⇌ Tengo que mantenerme al día, porque la tecnología nunca se detiene" },
  { cn: "Carry out", pro: "kerhi  auth", es: "Llevar a cabo", ex: "The company is carrying out a restructuring plan to improve efficiency ⇌ La compañía está llevando a cabo un plan de reestructuración para mejorar la eficiencia" },
  { cn: "Find out", pro: "faind  auth", es: "Averiguar / enterarse", ex: "My mom found out that I am pregnant ⇌ Mi mamá se enteró que estoy embarazada" },
  { cn: "Bring up", pro: "bring  op", es: "Criar / educar", ex: "I will bring up my child, as my father brought me up ⇌ Criaré a mi hijo, como me crió mi padre" },
  { cn: "Carry off", pro: "ke - rhi  of", es: "Lograr algo / Tener éxito", ex: "The thief managed to carry off the money without anyone noticing ⇌ El ladrón logró llevarse el dinero sin que nadie se diera cuenta" },
  { cn: "Answer back", pro: "an - sr bakh", es: "Responder de mala gana", ex: "Her son answered her back ⇌ Su hijo le contestó de mala gana / algo grosero" },
  { cn: "Burn out", pro: "brn - auth", es: "Hartarse de hacer algo", ex: "I just coded a lot, therefore I burn out ⇌ He estado mucho tiempo programando, ya me fastidie" },
  { cn: "Hold on", pro: "jhol - don", es: "Aguanta / Espera", ex: "Hold on I am tryna pay attention ⇌ Espera estoy tratando de poner atención" },
  { cn: "Show off", pro: "sho - u of", es: "Presumir, alardear sobre algo", ex: "Ranks doesnot matter at all, stop to Show off them ⇌ Las calificaciones no son del todo importantes, deja de presumir" },
  { cn: "Hang out", pro: "jan - gaut", es: "Pasar el rato", ex: "I wanna hang out with my friends ⇌ Quiero pasar tiempo con mis amigos" },
  { cn: "Break out", pro: "bre - ik aut", es: "Escaparse", ex: "The prisoners broke out of jail when nobody looking ⇌ Los prisioneros escaparon de la cárcel cuando nadie miraba" },
  { cn: "Ask out", pro: "ask auth", es: "Invitar a una cita", ex: "She wanted to Ask him out however is too shy ⇌ Ella quería invitarlo a salir, sin embargo es demasiado tímida" },
  { cn: "Back up", pro: "bak op", es: "Respaldar información", ex: "You must Back up important documents on your computer ⇌ Debes hacer una copia de seguridad de los documentos importantes en tu pc" },
  { cn: "Bitch up", pro: "bich op", es: "Arruinar algo", ex: "I just bitched up the interview, was terrible ⇌ Arruiné / Jodí la entrevista, fue terrible" },
  { cn: "Block off", pro: "blok of", es: "Obstruir la salida para evitar que alguien se vaya", ex: "The firemen Blocked off the building after the fire ⇌ Los bomberos bloquearon el edificio tras el incendio" },
  { cn: "Book in", pro: "buk in", es: "Reservar en un hotel", ex: "I took a taxi from the airport to the hotel and Booked in ⇌ Tomé un taxi desde el aeropuerto hasta el hotel y reservé" },
  { cn: "Call up", pro: "khal op", es: "Llamar / Marcar por teléfono", ex: "I Called her up as soon as I got my phone ⇌ La llamé tan pronto como obtuve mi teléfono" },
  { cn: "Calm down", pro: "kalm daun", es: "Relajarse / Bajar el enojo", ex: "You need to calm down, you are too angry ⇌ Necesitas calmarte, estás demasiado enojada" },
  { cn: "Carry on", pro: "kerui onkerui on", es: "Continuar / Proseguir", ex: "You have to carry on with your exam, until the teacher comes ⇌ Tienes que continuar con tu examen, hasta que venga la profesora" },
  { cn: "Break up", pro: "bre - ik op", es: "Terminar una relación", ex: "We broke up before get back college ⇌ Rompimos antes de volver a la universidad" },

  // { cn: "", pro: "", es: "", ex: "" },
];

for (let pv = 0; pv < phrasalVerbs.length; pv++) {
  outputPhrasalV += `
  <div class='card'>
  <h1 class='title-card'>${phrasalVerbs[pv].cn}</h1>
  <ul>
    <li>
      <div class='list-header'>
        <ion-icon class='card-svg' name='mic-outline'></ion-icon>
        <h4>Pronunciation</h4>
      </div>
      <p>${phrasalVerbs[pv].pro}</p>
    </li>

    <li>
      <div class='list-header'>
        <ion-icon class='card-svg' name='language-outline'></ion-icon>
        <h4>Reverse context</h4>
      </div>
      <p>${phrasalVerbs[pv].es}</p>
    </li>

    <li>
      <div class='list-header'>
        <ion-icon class='card-svg' name='extension-puzzle-outline'></ion-icon>  
        <h4>Example</h4>
      </div>
      <p>${phrasalVerbs[pv].ex}</p>
    </li>
  </ul>
</div>
  `;
}

document.querySelector('.cardsPV').innerHTML = outputPhrasalV;