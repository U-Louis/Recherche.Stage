let eng = document.getElementById("eng");
let fr = document.getElementById("fr");
let engBtn = document.getElementById("btnradio1");
engBtn.onclick = function() { setLangage(eng, fr); }
let frBtn = document.getElementById("btnradio2");
frBtn.onclick = function() { setLangage(fr, eng); }

let setLangage = (langageIn, langageOut) => {
        langageOut.style.display = "none";
        langageIn.style.display = "block";
    }
    (function() {
        setLangage(fr, eng);
    })();