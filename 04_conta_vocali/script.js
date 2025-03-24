/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

const volwes = ['a', 'e', 'i', 'o', 'u'];

function volwesCount(word){
    let count = 0;
    function countVowels(word){
        for (let i = 0; i < word.length; i++){
            if(volwes.includes(word[i])){
                count++;
            }
        }
        return count;
    }
}
// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)