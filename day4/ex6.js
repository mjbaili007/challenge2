//Character Counter: 
//Write a function countChar(str, char) that counts how many times a specific character appears in a string.
const p = require("prompt-sync")()
let str = p(" entrer une chaine de caractaire ")
let char = p("donner moi une carcter qui tu veux voir sa repetetion ")
function countChar(str, char) {
    cont= 0 
    for (let i = 0; i < str.length; i++) {
          if (str[i]=== char) {
             cont++
          }
        
    }
    console.log(char,"se repet ",cont,"fois")
    
}
countChar(str, char)