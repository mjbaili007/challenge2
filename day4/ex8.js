// String Compressor: 
//Write a function that compresses repeating characters (e.g., "aaabbc" becomes "a3b2c1")
const p = require("prompt-sync")()
let str = p(" entrer une chaine de caractaire ") 
function Compressor(str) {
    let cont = 1;
    let x =" "
    for (let i = 0; i < str.length; i++) {
         if (str[i]==str[i+1]) {
            cont++
            
         } else{
            x+=str[i] + cont
            cont = 1 
         }
         
    }
    return x
}
console.log(Compressor(str));
 