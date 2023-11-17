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

// const userSize = 16;

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

// Esercizio 1: condizioni con ausilio di operatori logici
// Maggiore e minore
// Scrivi un programma che dati quattro numeri, restituisca in output il maggiore e il minore.

// Esempio:
// Input: a = 3, b = -1, c = 4, d = -2
// Output: maggiore = 4, minore = -2

let a = 1;
let b = 2;
let c = 3;
let d = 4;

if (a > b && a > c && a > d) {
  console.log(a + " è il maggiore");
} else if (b > a && b > c && b > d) {
  console.log(d + " è il maggiore");
} else if (c > a && c > b && c > d) {
  console.log(c + " è il maggiore");
} else if (d > a && d > b && d > c) {
  console.log(d + " è il maggiore");
}

if (a < b && a < c && a < d) {
  console.log(a + " è il minore");
} else if (b < a && b < c && b < d) {
  console.log(d + " è il minore");
} else if (c < a && c < b && c < d) {
  console.log(c + " è il minore");
} else if (d < a && d < b && d < c) {
  console.log(d + " è il minore");
}

// Esercizio 2: stringhe e numeri
// Quanti anni ha?
// Scrivi un programma che dato l’anno corrente e un anno di nascita determini:

// l’età della persona
// quanti anni sono necessari per raggiungere i 100
// Esempio:
// Input: anno corrente = 2021, anno di nascita = 1996
// Output: età = 25, anni mancanti = 75

// const currentYear = 2023;
// const bornYear = 1990;
// const age = currentYear - bornYear;
// const toHundred = 100 - age;

// console.log(age);
// console.log(toHundred);

// Esercizio 3: Ciclo for
// Progetta un algoritmo in Javascript che stampi tutte le coppie di numeri naturali la cui somma è un numero intero a scelta.

// Esempio
// Input: numero 7
// Output:
// 0-7
// 1-6
// 2-5
// 3-4
// 4-3
// 5-2
// 6-1
// 7-0

// let sum = 8;
// let num = sum;

// for (let i = 0; i <= sum; i++, num--) {
//   console.log(num, i);
// }

// Esercizio 4: metodo e proprietà
// Il conta cifre
// Scrivi un programma che dato un numero conti da quante cifre è formato.

// Esempio
// Input: numero: 245
// Output: numero cifre: 3

// let num = 2008;
// let numDigit = num.toString();
// console.log(numDigit.length);
