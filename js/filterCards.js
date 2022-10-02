document.addEventListener("keyup", e=> {

    if (e.target.matches("#buscador")) {
  
        if (e.key ==="Escape")e.target.value = ""
        
        document.querySelectorAll(".card").forEach(carta => {
            carta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ? carta.classList.remove("filtro")
              : carta.classList.add("filtro")
        })

        document.querySelectorAll(".card-introduction").forEach(introCard => {
            introCard.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ? introCard.classList.remove("filtro")
                : introCard.classList.add("filtro")
        })
    }
  })