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

let totale = parseFloat(prompt("Qual è il totale del conto?"));
let percentuale = parseFloat(
  prompt("Quale percentuale di mancia vuoi lasciare?")
);

let calcolo = (totale * percentuale) / 100;
alert("La mancia da lasciare è: " + calcolo);
