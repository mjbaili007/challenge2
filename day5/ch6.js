/*Custom Reverse:
Write a function that reverses an array in place without using the built-in .reverse() method. */
let T = []
const p = require("prompt-sync")()
let x = Number (p(" donner moi le nbr des elements de tableux  "))
console.log("entre les elements de tableux ")
for (let i = 0; i < x ; i++) {
    T[i]= Number (p(" entre l'element "))   
}
console.log(T)
function invers(T) {
     for (let i = 0; i < x/2 ; i++) {
           
        let temp = T[i];
        T[i] = T[x-i-1];
        T[x-i-1] = temp;
     }

     return T
     
}
console.log(invers(T));

