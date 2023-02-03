document.addEventListener("keyup", e => {

  if (e.target.matches("#finder")) {

    if (e.key === "Escape") e.target.value = ""

    document.querySelectorAll('.card').forEach(carta => {
      carta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? carta.classList.remove("hidden")
        : carta.classList.add("hidden")
    });

    document.querySelectorAll(".card-introduction").forEach(introCard => {
      introCard.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? introCard.classList.remove("hidden")
        : introCard.classList.add("hidden")
    });

    document.querySelectorAll(".card-slang").forEach(carta => {
      carta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? carta.classList.remove("hidden")
        : carta.classList.add("hidden")
    });

    document.querySelectorAll('.sliderTips').forEach(carta => {
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