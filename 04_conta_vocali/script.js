/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.


function howManyVowels(word) {

    const volwes = ['a','e','i','o','u'];

    let count = 0;
    let foundVowels = [];
    for (let i = 0; i < word.length; i++) {

        for (let index = 0; index < volwes.length; index++) {

            if (word[i]=== volwes[index]){
                foundVowels.push(word[i]);
                count++;
            }
        }
    }

    console.log('Found vowels:', foundVowels);
    return count;
}

// Invoca la funzione qui e stampa il risultato in console

const result = howManyVowels(word);
console.log(result);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)