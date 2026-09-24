const p = require("prompt-sync")()
let str = p(" entrer une mot ")
var  Vowel = "eaouiOAUIE"
var cont = 0 
function porsentage(str) {
    for (let i = 0; i < str.length; i++) {
         for (let j = 0; j < Vowel.length; j++) {
            if (str[i] === Vowel[j]) {
                cont++
            }
            
         }
        
    }
    return (cont /str.length )*100
}
console.log("le porsentage est ",porsentage(str))

