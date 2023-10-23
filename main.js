/* Il Caffè */
/*
let tazzeVendute = prompt("quante tazze hai venduto oggi?");
let prezzo = 2;
let guadagni = tazzeVendute * prezzo;
let messaggio = "Oggi hai venduto ";
let fine = " tazze di caffè";
let frase = messaggio + guadagni + fine;
alert(frase); */

/* Calcolatore età */
/*
let AnnoDiNascita = prompt("Indica il tua anno di nascita");
let Annoattuale = 2023;
let calcolo = Annoattuale - AnnoDiNascita;
alert(calcolo); */

/* Convertitore temperatura */
/*
let temperatura = prompt("Indica una temperatura in fahrenheit");
let Celsius1 = 32;
let Celsius2 = 9;
let Celsius3 = 5;
let calcolo1 = temperatura - Celsius1;
let calcolo2 = calcolo1 / Celsius2;
let calcolo3 = calcolo2 * Celsius3;

let frase = " ° Celsius";
alert(calcolo3 + frase);
*/

/* Calcolatore di voti */
/*
let studente1 = parseFloat(prompt("Indica la valutazione del tuo test"));
let studente2 = parseFloat(prompt("Indica la valutazione del tuo test"));
let studente3 = parseFloat(prompt("Indica la valutazione del tuo test"));
let divisore = 3;
let calcolo1 = studente1 + studente2 + studente3;
let calcolo2 = calcolo1 / divisore;
let frase = "La media delle vostre valutazioni è ";
alert(frase + calcolo2);
*/

/*
let student1 = prompt( "indica la valutazione del tuo test") 
let studentN1 = parseInt(student1)
let student2 = prompt("indica la valutazione del tuo test")
let studentN2 = parseInt(student2)
let student3 = prompt ("indica la valutazione del tuo test")
let studentN3 = parseInt(student3)
let  media = (studentN1 + studentN2 + studentN3 ) / 3
alert(media) */

/* Calcolatore di voti */
/*
let totale = parseFloat(prompt("Qual è il totale del conto?"));
let percentuale = parseFloat(
  prompt("Quale percentuale di mancia vuoi lasciare?")
);

let calcolo = (totale * percentuale) / 100;
alert("La mancia da lasciare è: " + calcolo);
*/

/*----------------------------------*/

/* La serata cinema */
/*
let eta = prompt("Qaul'è la tua età?");
if (eta < 13) {
  alert("Puoi vedere solo film con classificazione PG");
} else if (eta >= 13 && eta < 17) {
  alert("classificazione PG e PG-13");
} else {
  alert("puoi vedere tutti i film");
}
*/

/* Calcolatore di sconti */
/*
let totale = parseFloat(prompt("Qual è il prezzo dell'articolo?"));
let percentuale = parseFloat(prompt("qual'è la percentuale di sconto?"));

let calcolo = (totale * percentuale) / 100;
if (calcolo < 49) {
  alert(calcolo + " buona serata");
} else {
  alert(calcolo + " è un ottimo affare");
}
*/

/* Calcolatore BMI */
/*
let peso = parseInt(prompt("Indica il tuo peso in kg"));
let altezza = parseInt(prompt("Indica la tua altezza in centimetri")) / 100;
let bmi = peso / (altezza * altezza);

if (bmi < 18.5) {
  alert("Sei sottopeso. Il tuo BMI è: " + bmi);
} else if (bmi >= 18.5 && bmi <= 24.9) {
  alert("Hai un peso normale. Il tuo BMI è: " + bmi);
} else {
  alert("Sei sovrappeso. Il tuo BMI è: " + bmi);
}
*/
/* Anno bisestile */
/*
let anno = prompt("Inserisci un anno");
let annoBis = parseInt(anno);

if ((annoBis 
*/
/* L'assegnatore dei voti */
let punteggio = parseInt(prompt("Inserisci il tuo punteggio del test"));

if (punteggio >= 90) {
  alert("Il tuo voto è A");
} else if (punteggio >= 80 && punteggio < 90) {
  alert("Il tuo voto è B");
} else if (punteggio >= 70 && punteggio < 80) {
  alert("Il tuo voto è C");
} else if (punteggio >= 60 && punteggio < 70) {
  alert("Il tuo voto è D");
} else {
  alert("Il tuo voto è una F");
}
