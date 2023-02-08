'use strict';

document.addEventListener("keyup", e => {
  if (e.target.matches("#finder")) {
    if (e.key === "Escape") e.target.value = ""

    document.querySelectorAll('.card').forEach(carta => {
      carta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? carta.classList.remove("hidden")
        : carta.classList.add("hidden")

    });

    document.querySelectorAll('.tip').forEach(carta => {
      carta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? carta.classList.remove("hidden")
        : carta.classList.add("hidden")
    });
  }
});