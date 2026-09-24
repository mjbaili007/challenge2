//First & Last Char: Write a function that takes a string and logs its first and last characters.
const p = require("prompt-sync")()
let str = p(" entrer une chaine de caractaire ")
function FL(str) {
     
    console.log(" le premier caracter est",str[0])
    console.log(" la derniere caracter est",str[str.length-1])
    
}
FL(str)