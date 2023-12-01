// Epicode Calculator (Marco H. Longo)

//? Definizione algoritmo:
//* Ingredienti (Input)?
// Operandi (primo e secondo), Operatori (+,-,/,*,.,=), Reset.

//* Qual è il nostro output?
// Risultato dell'operazione.

//* Aspetti di acquisizione dei dati dall'utente:
//! Elementi utili dal DOM:
// Cosa devo 'catturare'?
// Tasti con cifre, tasti operatore, tasto risultato, tasto reset, campo display.

//* Listeners:
// Quali fra gli elementi definiti sopra devono possederli?
// Tasti con cifre (L), tasti operatore (L), tasto risultato (L), tasto reset (L).

//* Funzioni di calcolo:
// Quali funzioni di calcolo sono strettamente necessarie?
// Produzione del risultato, reimpostazione condizioni iniziali (AC).

//* Bonus:
// E se volessimo implementare le operazioni a catena?
// Considerare il risultato come il primo operando dell'operazione successiva.

//TODO: Elementi del DOM:
// Il mio display:
let display = document.getElementById("display"); // Nodo
// I segni di operazione:
let operatorEls = document.getElementsByClassName("operator"); // Array
// Le cifre 0->9:
let digitEls = document.getElementsByClassName("digit"); // Array

//TODO: Input fondalmentali:
let firstVal = "";
let secondVal = "";
let operator = null;
let finalResult = "";

//TODO: Listeners (operatori):
for (let operatorEl of operatorEls) {
  operatorEl.addEventListener("click", (event) => {
    if (firstVal) {
      // Valorizzo l'operatore soltanto se l'utente mi ha valorizzato prima il firstVal!
      operator = event.target.value;
    }
  });
}

//TODO: Listeners (operandi + controllo selezione primo e secondo operando):
for (let digitEl of digitEls) {
  digitEl.addEventListener("click", (event) => {
    if (!operator) {
      // Se l'operatore non è stato valorizzato, devo salvare il valore in input in firstVal...
      firstVal += event.target.value;
      display.value = firstVal;
    } else {
      // ...altrimenti in secondVal!
      secondVal += event.target.value;
      display.value = secondVal;
    }
  });
}

//TODO: Funzione di calcolo risultato (extra: operazione a catena)
function resultCalc() {
  if (!firstVal || !secondVal || !operator) {
    // Casistica in cui uno dei 3 elementi fondamentali per il calcolo non sia definito!
    return; // Arresto subito la funzione!
  }
  // Logica per eseguire l'operazione richiesta:
  switch (operator) {
    case "+":
      finalResult = +firstVal + +secondVal;
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
  firstVal = finalResult;
}

//TODO: Funzione di reset (AC)
// Resetto tutti gli input della calcolatrice!
function resetCalc() {
  display.value = "0";
  firstVal = "";
  secondVal = "";
  operator = null;
}

//! EXTRA: Rendere la calcolatrice utilizzabile attraverso la tastiera!

//* Scadenza progetto fine modulo: 04.12.2023 h19
//* Scadenza benchmark Teoria M1 (JavaScript Basic): 04.12.2023 h19
//* Lunedì 4dic - Domenica 10dic: Build Week.

// Ascoltatore di eventi della tastiera
document.addEventListener("keydown", (event) => {
  const key = event.key;

  // Gestisci i tasti numerici e il punto decimale
  if (!isNaN(key) || key === ".") {
    digitKeyPress(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    operatorKeyPress(key);
  } else if (key === "Enter") {
    enterKeyPress();
  } else if (key === "Delete") {
    deleteKeyPress();
  }
});

// Funzione per gestire la pressione del tasto numerico
function digitKeyPress(key) {
  if (!operator) {
    firstVal += key;
    display.value = firstVal;
  } else {
    secondVal += key;
    display.value = secondVal;
  }
}

// Funzione per gestire la pressione del tasto operatore
function operatorKeyPress(key) {
  if (firstVal) {
    operator = key;
  }
}

// Funzione per gestire la pressione del tasto Enter
function enterKeyPress() {
  resultCalc();
}

// Funzione per gestire la pressione del tasto Escape
function deleteKeyPress() {
  resetCalc();
}
