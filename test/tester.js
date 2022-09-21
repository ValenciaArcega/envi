document.getElementById('speaker').addEventListener("click",()=>{
    decir(document.getElementById("fieldToSpeak").value);
});

function decir(txt){
    speechSynthesis.speak(new SpeechSynthesisUtterance(txt));
    // const utterance  = new SpeechSynthesisUtterance();
}




