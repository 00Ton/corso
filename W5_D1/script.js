/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function crazySum(int1, int2) {
//   if (int1 === int2) {
//     console.log(superSum);
//   } else console.log(normalSum);
// }

// let x = 6;
// let y = 6;
// let superSum = (x + y) * 3;
// let normalSum = x + y;

// crazySum(x, y);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e 
 ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function boundary(int) {
//   if ((int >= 20 && int <= 100) || int === 400) {
//     console.log(true);
//   } else console.log(false);
// }

// let x = 100;
// boundary(x);

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function reverseString(myString) {
//   let array = [];
//   let resultString = "";

//   if (typeof myString === "string") {
//     for (let index = myString.length - 1; index >= 0; index--) {
//       array.push(myString[index]);
//     }
//     resultString = array.join("");
//     return resultString;
//   }
// }

// let x = "ciao sono antonio";

// let output = reverseString(x);
// console.log(output);

// console.log(reverseString("Ciao"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", 
 che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* Dividi e impera */

// function upperFirst(word) {
//   if (typeof word === "string") {
//     let firstSentence = word.charAt(0).toUpperCase() + word.slice(1);
//     let arr = firstSentence.split(" ");
//     let capitalize = [];

//     for (let i = 0; i < arr.length; i++) {
//       capitalize.push(arr[i][0].toUpperCase() + arr[i].substring(1));
//     }
//     return capitalize.join(" ");
//   }
// }

// let x = "konnichiha mina san";
// a = upperFirst(x);
// console.log(a);

// flex di Fausto per ricordarmi quanto sono idiota.

// sentence = "A big brown fox";
// function capitalize(sentence) {return sentence.split(" ").map((element) => {return element[0].toUpperCase() + element.slice(1);}).join(" ");}

// console.log(sentence);
// a = capitalize(sentence);

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna 
 un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function giveMeRandom(n) {
//   let arr = [];

//   for (let i = 0; i < n; i++) {
//     arr.push(Math.floor(Math.random() * 11));
//   }
//   return arr;
// }

// let x = 8;
// console.log(giveMeRandom(x));

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
