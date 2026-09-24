// Find Maximum:
//  Write a function that takes an array of numbers and returns the largest number (without using Math.max).
var T = []
const p = require("prompt-sync")()
let x = Number (p(" donner moi le nbr des elements de tableux  "))
console.log("entre les elements de tableux ")
for (let i = 0; i < x ; i++) {
    T[i]= Number (p(" entre l'element"))   
}
console.log(T)
function maxdetable(T) {
    max = T[0];
    for (let i = 0; i < x; i++) {
        if (max < T[i]) {
            max = T[i]
        }
    }
 return (max)
}
console.log(maxdetable(T))