// Seleccionar estos idiomas por defecto, en caso de que existan
const IDIOMAS_PREFERIDOS = ["en-US", "en-UK"];

// Esperar a que el que DOM cargue
document.addEventListener("DOMContentLoaded", () => {
    const $voces = document.querySelector("#voces"),
        $boton = document.querySelector("#btnEscuchar"),
        $mensaje = document.querySelector("#mensaje");
    let posibleIndice = 0;
    let theVoices = [];

    // Función que pone las voces dentro del select
    const cargarVoces = () => {
        if (theVoices.length > 0) {
            console.log("No se cargan las voces porque ya existen: ", theVoices);
            return;
        }
        theVoices = speechSynthesis.getVoices();
        console.log({ vocesDisponibles: theVoices })
        posibleIndice = theVoices.findIndex(voz => IDIOMAS_PREFERIDOS.includes(voz.lang));
        if (posibleIndice === -1) posibleIndice = 0;
        theVoices.forEach((voz, indice) => {
            const opcion = document.createElement("option");
            opcion.value = indice;
            opcion.innerHTML = voz.name;
            opcion.selected = indice === posibleIndice;
            $voces.appendChild(opcion);
        });
    };



    // Si no existe la API, lo indicamos
    if (!'speechSynthesis' in window) return alert("Lo siento, tu navegador no soporta esta tecnología");

    // No preguntes por qué pongo esto que se ejecuta dos veces
    // en determinados casos, solo así funciona en algunos casos
    cargarVoces();

    // Si hay evento, entonces lo esperamos
    if ('onvoiceschanged' in speechSynthesis) {
        speechSynthesis.onvoiceschanged = function () {
            cargarVoces();
        };
    }


    $boton.addEventListener("click", () => {
        let textoAEscuchar = $mensaje.value;
        if (!textoAEscuchar) return alert("Escribe el texto");
        let mensaje = new SpeechSynthesisUtterance();
        mensaje.voice = theVoices[$voces.value];
        mensaje.volume = 2;
        mensaje.rate = 1;
        mensaje.text = textoAEscuchar;
        mensaje.pitch = 1;
        speechSynthesis.speak(mensaje);
    });
});















document.getElementById('speaker').addEventListener("click", () => {
    decir(document.getElementById("fieldToSpeak").value);
  });

  function decir(txt) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(txt));
    // const utterance  = new SpeechSynthesisUtterance();
  }