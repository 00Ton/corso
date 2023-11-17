// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento per il lavoro di un developer (il 90% del dati che gestirai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello DEVE venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. 
Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

// const marco = {
//   name: "Marco",
//   lastName: "Rossi",
//   isAmbassador: true,
// };

// const paul = {
//   name: "Paul",
//   lastName: "Flynn",
//   isAmbassador: false,
// };

// const amy = {
//   name: "Amy",
//   lastName: "Reed",
//   isAmbassador: false,
// };

// const prices = [101, 5, 2];
// const shippingCost = 50;
// const sale = 0.7;

// let item = prices[1];
// let buyingUser = amy;

// Condition

// if (buyingUser.isAmbassador === true && item > 100) {
//   let totalPrice = item * sale;
//   console.log(totalPrice);
// } else if (buyingUser.isAmbassador === true && item < 100) {
//   let totalPrice = item * sale + shippingCost;
//   console.log(totalPrice);
// } else if (buyingUser.isAmbassador === false && item > 100) {
//   let totalPrice = item;
//   console.log(totalPrice);
// } else if (buyingUser.isAmbassador === false && item < 100) {
//   let totalPrice = item + shippingCost;
//   console.log(totalPrice);
// }

// Arrays

// const userArr = [];
// userArr.push(marco, paul, amy);

// console.log(userArr);

// for (let index = 0; index < userArr.length; index++) {
//   console.log("L'utente", userArr[index].name, userArr[index].lastName);

//   if (userArr[index].isAmbassador === true) {
//     let ambassadors = [];
//     ambassadors.push([index]);
//     console.log(ambassadors);
//     console.log("è un ambassador");
//   } else {
//     console.log("non è un ambassador");
//   }
// }

// Secondo Array fuori dal for
// const ambassadorArray = [marco, paul, amy].filter((user) => user.isAmbassador);
// console.log(ambassadorArray);

// EXTRA Alessandro
//1
// Scrivi un programma che dato un numero N, generi un array di N numeri casuali e stampi sia l'array ottenuto che quello invertito.
//  Esempio:
// Input: N = 5
// Output: array ottenuto = [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3]

// let num = 10;
// const randomArr = [];
// for (let index = 0; index < num; index++) {
//   randomArr.push(Math.floor(Math.random() * 10));
//   console.log(randomArr);
// }
// console.log(randomArr);

// const invertedRandomArr = randomArr.reverse();
// console.log(invertedRandomArr);

//2
// Metti un po' d'ordine
// Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

// Esempio:
// Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
// Output: [8, 7, 6, 5, 5, 3, 2, 1, -4, -2]

// Variante:
// Prova ad ordinali in modo crescente.

let num = 10;
const randomArr = [];
for (let index = 0; index < num; index++) {
  randomArr.push(Math.floor(Math.random() * 10));
  // console.log(randomArr);
}
randomArr.sort();
console.log(randomArr);

randomArr.reverse();
console.log(randomArr);

// Operazioni tra array
//   Scrivi un programma che dati:

// 2 array di 10 elementi interi casuali compresi tra 1 e 10,
// il tipo di operazione aritmetica da effettuare, una delle seguenti:
// addizione
// sottrazione
// moltiplicazione
// divisione
// Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.

//   Esempio:
//     Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
//     Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]
// La tombola magica
//   Scrivi un programma che dato:

// un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
// un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
// Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
//   2 numeri uguali => ambo
//   3 numeri uguali => terna
//   4 numeri uguali => quaterna
//   5 numeri uguali => cinquina
//   tutti i numeri uguali => tombola

//   In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
//   in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".
//   (generazione numeri random https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
