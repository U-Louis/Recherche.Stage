/* Language */
let eng = document.getElementById("eng");
let fr = document.getElementById("fr");
let engBtn = document.getElementById("btnradio1");
engBtn.onclick = function() { setLangage(eng, fr, engBtn, frBtn); }
let frBtn = document.getElementById("btnradio2");
frBtn.onclick = function() { setLangage(fr, eng, frBtn, engBtn); }

let setLangage = (langageIn, langageOut, btnIn, btnOut) => {
    langageOut.style.display = "none";
    langageIn.style.display = "block";
    btnIn.style.filter = "grayscale(0%)";
    btnOut.style.filter = "grayscale(100%)";
}

(function() {
    setLangage(fr, eng, frBtn, engBtn);
})();


/* Popover */
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})
var popover = new bootstrap.Popover(document.querySelector('.example-popover'), {
    trigger: 'focus'
})
document.getElementById("goToClipBoard").onclick = function() { navigator.clipboard.writeText("louis.urbani@yahoo.com"); }