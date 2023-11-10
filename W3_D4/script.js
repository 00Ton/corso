/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* 
I datatype fondamentali in JavaScript sono i seguenti:

 1) Number: Il number è il valore numerico inteso come 1 2 3 147 3,14 ecc...
 2) String: La stringa è il contenuto definito tra apici come "antonio" "32" "10+10" "true".
 3) Boolean: Il valore booleano è true or false (vero o falso) e può aiutarci a capire l'esito del nostro codice in base all'output.
 4) Null: Si utilizza il null quando abbiamo bisogno di "rendere vuoto" il valore, ad esempio di una variabile, es: let myVar = null;
 5) Undefined: è undefined qualcosa che non è propriamente "stato definito", il nostro amico JS ci indica chiaramente che l'operazione che stiamo
 cercando di fare manca di un componente che non esiste/è definito in modo errato. 
 */

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

L'oggetto, in JavaScript è uno Structural Type, quindi dato strutturale.
Comunemente, una raccolta chiave-valore, può essere pensato come ad un componente nel cui all'interno risiedono dei componenti descrittivi dello stesso, 
ad esempio:

let myVar {
name: "var"
age: "2"
job: "dev"
hobby: "sport"
}

*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let num1 = 12;
// let num2 = 20;
// console.log(num1 + num2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let name = "antonio";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let x = 12;
// console.log(x-4);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let name1 = "john";
// let name2 = "John";
// console.log(name1 === name2)

// let name1 = "john";
// let name2 = "John";

// console.log(name1 === name2.toLowerCase());

/* Extra preso dalla slide Crea un oggetto in JS che ti rappresenti.*/

/* 
let epicodeStudent {
    name: "Antonio"
    surname: "Grande"
    hobby: "coding, photography, videogames"
} */
