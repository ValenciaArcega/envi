document.addEventListener("keyup", e=> {

    if (e.target.matches("#finder")) {
  
        if (e.key ==="Escape")e.target.value = ""
        
        document.querySelectorAll(".card").forEach(carta => {
            carta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ? carta.classList.remove("filter")
              : carta.classList.add("filter")
        })
        
        document.querySelectorAll(".card-introduction").forEach(introCard => {
            introCard.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ? introCard.classList.remove("filter")
                : introCard.classList.add("filter")
        }) 

        document.querySelectorAll(".card-slang").forEach(carta => {
            carta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ? carta.classList.remove("filter")
              : carta.classList.add("filter")
        })

        document.querySelectorAll(".sliderTips").forEach(carta => {
            carta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ? carta.classList.remove("filter")
              : carta.classList.add("filter")
        })
    }
  })