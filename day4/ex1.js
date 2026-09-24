// Length & Uppercase: Given a string, log its length, and then log the entire string in uppercase.
const p = require("prompt-sync")()
let str = p(" entrer une chaine de caractaire ") 
function majlong(str) {
    console.log(" la longeur de cet chaine est ",str.length);

    console.log(" cet chaine en majuscule  ",str.toUpperCase());
}
majlong(str)
