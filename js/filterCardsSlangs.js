document.addEventListener("keyup", e=> {

    if (e.target.matches("#finder")) {
  
        if (e.key ==="Escape")e.target.value = ""
        


        document.querySelectorAll(".card-introduction").forEach(introCard => {
            introCard.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ? introCard.classList.remove("filter")
                : introCard.classList.add("filter")
        })
    }
  })