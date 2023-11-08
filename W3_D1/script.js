//TODO Introduzione a JavaScript:

//? 1. Alcuni tipi di dato fondamentali
// 1. String. ES: "Ciao", 'ciao'
// 2a. Number (int). ES: 5
// 2b. Number (float). ES: 3.14
// 3. Boolean. ES: true, false
// 4. undefined
// 5. null

//? 2. Cos'è un console.log (Spiegazione non tecnica)
// Stampa il contenuto (in valore) dell'argomento, sulla console del browser!
//* ES.1 - Stampa la stringa Hello World in console.
// console.log("Hello World!");

//? 3. Commenti in JavaScript (single-line - multi-line)
// Questo è un commento single-line!
/* Questo è un 
commento multi-
riga! */

//? 4. Scegliere un nome per una variabile (Convenzioni e camelCase)
// a. In inglese ed in camelCase...
// b. Significativo e sintetico
// c. Non ambiguo

//? 5. Dichiarare una variabile
//* ES.2 - Dichiara una variabile, poi stampala in console (aka. "consoleloggala").
// let myFirstVar;
// console.log(myFirstVar);

//* ES.3 - Dichiara una variabile e contestualmente valorizzala a 10, poi stampala in console.
// let mySecondVar = 10;
// console.log(mySecondVar);

//* ES.4 - Se volessi ora annullare il valore della variabile?
// mySecondVar = null;
// console.log(mySecondVar);

//? 6. Riassegnare una variabile
//* ES.5 - Assegna alla variabile dell'ES.4 (già dichiarata) la stringa Pippo.
// mySecondVar = 'Pippo';
// console.log(mySecondVar);

//? 7. Prepariamo i biscotti!
//* ES.6 - Riempiamo le 3 variabili (ciotole piccole) con i rispettivi ingredienti
// butter - 120gr, sugar - 80gr, flour - 260gr
// let butter = 120;
// let sugar = 80;
// let flour = 260;

//* ES.7 - Aggiungiamo il valore (il contenuto..) di butter e sugar in una terza variabile medium bowl
// Dopo di che 'consolelogga' la medium bowl!
// let mediumBowl;
// mediumBowl = butter + sugar;
// console.log(mediumBowl); // Mi aspetto 200...

//* ES.8 - Aggiungiamo il valore (il contenuto..) di flour alla stessa variabile medium bowl
// Dopo di che 'consolelogga' la medium bowl!
// mediumBowl = mediumBowl + flour;
// console.log(mediumBowl);

//? 8. Forma compatta per la riassegnazione di una variabile
// Riformula più elegantemente la soluzione dell'ES.8.
// mediumBowl += flour;