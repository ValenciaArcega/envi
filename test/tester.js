document.getElementById('speaker').addEventListener("click",()=>{
    fnTalk(document.getElementById("txt").value);
});

function fnTalk(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}