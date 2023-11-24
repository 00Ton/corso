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

// let calc = 0;

// function area(l1, l2) {
//   return (calc = l1 * l2);
// }

// let x = 10;
// let y = 5;
// console.log(area(x, y));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let x = -40;
// a = crazyDiff(x);

// function crazyDiff(n) {
//   n = Math.abs(n - 19);
//   if (n > 19) {
//     n = n * 3;
//     console.log("Il numero è superiore a 19");
//   } else console.log("il numero è inferiore a 19");

//   return n;
// }

// console.log(a);

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, 
 ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let codeCheck = "";

// function codify(string) {
//   if (typeof string !== "string") {
//     return "Input error";
//   }

//   if (string.startsWith("code")) {
//     return (codeCheck = string);
//   }
//   return "code" + string;
// }

// let x = "dajemine";
// a = codify(x);
// console.log(a);

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function check3and7(n) {
//   if (n < 0 || n % 1 !== 0) {
//     return "input error";
//   }
//   if (n % 3 === 0 || n % 7 === 0) {
//     return true;
//   }
//   return false;
// }

// let x = 70;
// a = check3and7(x);
// console.log(a);

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function cutString(string) {
//   if (typeof string !== "string") {
//     return "input error";
//   }

//   return string.substring(1, string.length - 1);
// }

// let x = "Giovanni";
// a = cutString(x);
// console.log(a);

// 🍰 Esercizio 1
// Scrivi una funzione che prenda due parametri, base e altezza, e restituisca l'area del rettangolo corrispondente.
// let calc = 0;
// function area(b, h) {
//   calc = b * h;
//   return calc;
// }

// let base = 10;
// let height = 5;
// a = area(base, height);
// console.log(calc);

// 🍰 Esercizio 2
// Scrivi una funzione che prenda un parametro numero e restituisca true se il numero è pari, altrimenti restituisca false.

// let result = 0;
// function evenOdd(n) {
//   if (n % 2 === 0) {
//     result = true;
//   } else result = false;
// }

// let x = 8;
// a = evenOdd(x);
// console.log(result);

// 🍰 Esercizio 3
// Scrivi una funzione che prenda due parametri di tipo stringa e restituisca la loro concatenazione.
// let result = "";
// function linked(s1, s2) {
//   result = s1.concat() + s2.concat();
// }

// let x = "Mio";
// let y = "Padre";
// a = linked(x, y);
// console.log(result);

// 🍰 Esercizio 4
// Scrivi una funzione che prenda un parametro numero e restituisca il suo fattoriale.

// function factorial(n) {
//   let res = 1;
//   for (let i = n; i > 0; i--) {
//     res *= i; // res = res * i;
//   }
//   return res;
// }

// let result = factorial(5);
// console.log(result);

// 🍰 Esercizio 5
// Scrivi una funzione che generi un numero casuale compreso tra un valore minimo e un valore massimo.
// let result = 1;
// let randomGenerator = Math.random();

// function randomMinMaxNum(nMin, nMAx) {
//   let range = nMAx - nMin;
//   let randomRange = randomGenerator * range;
//   result = randomRange + nMin;
//   return result;
// }

// let x = 9;
// let y = 10;
// a = randomMinMaxNum(x, y);
// console.log(result);

// 🍰 Esercizio 6
// Scrivi una funzione che prenda una parola come parametro e restituisca true se la parola è palindroma, altrimenti restituisca false.

// let result = null;

// function mirror(mirrorString) {
//   if (mirrorString === mirrorString.split("").reverse().join("")) {
//     return (result = true);
//   } else return (result = false);
// }

// let x = "osso";
// a = mirror(x);
// console.log(result);

// 🍰 Esercizio 7
// Scrivi una funzione che prenda un array di numeri come parametro e restituisca la somma di tutti gli elementi.

// let sum = null;

// function arrFun(arrSum) {
//   for (let index = 0; index < arrSum.length; index++) {
//     sum += arrSum[index];
//   }
//   return sum;
// }

// let arr = [1, 2, 3, 4, 5];
// a = arrFun(arr);
// console.log(sum);

// 🍰 Esercizio 8
// Scrivi una funzione che prenda un array di numeri come parametro e restituisca un oggetto con le proprietà
// "massimo" e "minimo" che rappresentano rispettivamente il valore massimo e il valore minimo dell'array.
// let result = [];
// function minMax(object) {
//   for (let index = 0; index < object.length; index++) {
//     return result.push(object[index], object[object.length - 1]);
//   }
// }

// let arr = [1, 2, 3, 4, 5, 1000];
// let a = minMax(arr);
// console.log(result);

// 🍰 Esercizio 9
// Scrivi una funzione che prenda una stringa come parametro e restituisca il numero di vocali presenti nella stringa.

let result = [];
function vocalEngeneering(vowels) {
  return result.push(vowels.replace(/[aeiou]/gi, ""));
}

let x = "Are you even trying";
let a = vocalEngeneering(x);
console.log(result);

// 🍰 Esercizio 10
// Scrivi una funzione che prenda un array di numeri come parametro e restituisca la media di tutti gli elementi.
