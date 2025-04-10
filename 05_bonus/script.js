/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

const getGreeting = (name) => {
    const d = new Date();
    const h = d.getHours();
    let greeting;

    if (h < 13) {
        greeting = 'Buongiorno';
    } else if (h < 17) {
        greeting = 'Buon pomeriggio';
    } else {
        greeting = 'Buonasera';
    }

    return `${greeting} ${name}.`;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(getGreeting(name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.