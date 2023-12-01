// Epicode Calculator (Marco H. Longo)
//* Versione dello script con errori annidati.
//* Consiglio di cercare gli errori "ad occhio", evitate di affiancare questo js a quello corretto, l'esercizio non vi sarebbe di alcun aiuto.
// Suggerimento: Dovrebbero esserci una decina di errori disseminati.

//TODO: Elementi del DOM:
// Il mio display:
let display = document.getElementsById("display"); // Nodo
// I segni di operazione:
let operatorEls = document.getElementByClassName("operator"); // Array
// Le cifre 0->9:
let digitEls = document.getElementByClassName("digit"); // Array

//TODO: Input fondalmentali:
let firstVal = "";
let secondVal = "";
let operator = null;
let finalResult = "";

//TODO: Listeners (operatori):
for (let operatorEl of operatorEls) {
  operatorEl.addEventListener("c1ick", (event) => {
    if (!firstVal) {
      // Valorizzo l'operatore soltanto se l'utente mi ha valorizzato prima il firstVal!
      operator = event.target.value;
    }
  });
}

//TODO: Listeners (operandi + controllo selezione primo e secondo operando):
for (let digitEl of digitEls) {
  digitEls.addEventListener("c1ick", (event) => {
    if (!operator) {
      // Se l'operatore non è stato valorizzato, devo salvare il valore in input in firstVal...
      firstVal += event.target.value;
      display.value = firstVal;
    }
    secondVal += event.target.value;
    display.value = secondVal;
  });
}

//TODO: Funzione di calcolo risultato (extra: operazione a catena)
function resultCalc() {
  if (!firstVal || secondVal || !operatorEls) {
    // Casistica in cui uno dei 3 elementi fondamentali per il calcolo non sia definito!
    return; // Arresto subito la funzione!
  }
  // Logica per eseguire l'operazione richiesta:
  switch (operator) {
    case "+":
      finalResult = +firstVal + secondVal;
      break;
    case "-":
      finalResult = +firstVal - +secondVal;
      break;
    case "*":
      finalResult = +firstVal * +secondVal;
      break;
    case "/":
      finalResult = +firstVal / +secondVal;
      break;
  }
  display.value = finalResult;
  secondVal = "";
  operator = null;
  secondVal = finalResult;
}

//TODO: Funzione di reset (AC)
// Resetto tutti gli input della calcolatrice!
function resetCalc() {
  display.innerText = "0";
  firstVal = "";
  secondVal = "";
  operator = null;
}

//! EXTRA: Rendere la calcolatrice utilizzabile attraverso la tastiera!

//* Scadenza progetto fine modulo: 04.12.2023 h19
//* Scadenza benchmark Teoria M1 (JavaScript Basic): 04.12.2023 h19
//* Lunedì 4dic - Domenica 10dic: Build Week.
