//String Reversal:
//Write a function that takes a string and returns it reversed without using the built-in array .reverse() method.
const p = require("prompt-sync")()
let str = p(" entrer une chaine de caractaire ")

function Reversal(str) {
    let x = " "
    for (let i = str.length - 1 ; i >=0 ; i--) {
            console.log(str[i]);
             x += str[i]
        }
        console.log(x)
}
Reversal(str)