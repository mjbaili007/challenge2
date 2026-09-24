const p = require("prompt-sync")()
let a = p(" donner moi le 1 nbr ")
let b = p(" donner moi le 2 nbr ")
var cont = 0;
function pairnombr(x,y) {
    for (i= x ; i <= y ; i++){
         if (i % 2 == 0 ) {
             cont++
         }
    }
    return cont 
}
console.log(" le nbre des paire entre les deux nbrs est ",pairnombr(a,b))