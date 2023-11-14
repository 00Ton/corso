//ESERCIZI SUGLI IF:

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let x = 10;
// let y = 50;

// if (x > y) {
//   console.log(x + " è più grande di " + y);
// } else if (y > x) console.log(y + " è più grande di " + x);

// Con operatore ternario ?

// let biggerNum =
//   x > y
//     ? console.log(x + " è più grande di " + y)
//     : console.log(y + " è più grande di " + x);

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const userSize = 16;

// if (userSize < 5) {
//   console.log("Tiny");
// } else if (userSize < 10) {
//   console.log("Small");
// } else if (userSize < 15) {
//   console.log("Medium");
// } else if (userSize < 20) {
//   console.log("Large");
// } else {
//   console.log("Huge");
// }

// Esempio con Switch-Case True

// switch (true) {
//   case userSize < 5:
//     console.log("Tiny");

//     break;
//   case userSize < 10:
//     console.log("Small");

//     break;
//   case userSize < 15:
//     console.log("Medium");

//     break;
//   case userSize < 20:
//     console.log("Large");

//     break;
//   default:
//     console.log("Huge");
//     break;
// }

//ESERCIZI SUI CICLI:

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let i = 0;

// for (i = 0; i < 11; i++) {
//   if (i === 3) {
//     continue;
//   } else if (i === 8) {
//     continue;
//   }
//   console.log(i);
// }
// console.log("La variabile " + i + " è fuori dal tunnel del divertimento");

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, 
  il ciclo deve controllare che il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// for (let i = 0; i < 15; i++) {
//   if (i % 2 === 1) {
//     console.log(i + " è dispari");
//   } else if (i % 2 !== 1) {
//     console.log(i + " è pari ");
//   }
// }

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, 
  il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let x = 6;
// let y = 2;
// const z = 8;

// if (x + y === z) {
//   console.log("somma");
// } else if (x - y === z) {
//   console.log("sottrazione");
// } else if (x === z || y === z) {
//   console.log("il valore di una delle due variabili è 8");
// } else console.log("nessuna delle condizioni è verificata");

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita 
(altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let totalShoppingCart = 51;

// if (totalShoppingCart > 50) {
//   console.log("spedizione gratuita");
// } else if (totalShoppingCart <= 50) {
//   console.log(totalShoppingCart + "10 di spedizione");
// }

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, 
  usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let totalShoppingCart = 51;
// const blackFriday = (totalShoppingCart * 4) / 5;
// const totalBlackFriday = totalShoppingCart - blackFriday;

// if (blackFriday > 50) {
//   console.log("spedizione gratuita");
// } else blackFriday <= 50;
// console.log(blackFriday + " + 10 di spedizione");

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternario per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let isMale = "male";
// let gender = isMale ? "male" : "female";

// console.log(isMale);

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. 
  Se un valore tuttavia è multiplo di 3 (operatore modulo!), 
  stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". 
  Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

// for (let i = 1; i < 101; i++) {
//   if (i % 5 === 0 && i % 3 === 0) console.log(i + " FizzBuzz");
//   else if (i % 3 === 0) console.log(i + " Fizz");
//   else if (i % 5 === 0) console.log(i + " Buzz");
//   else console.log(i);
// }
