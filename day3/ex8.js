
const r = require ("prompt-sync")()
let x  = r("donner moi une nbr");
let y = r("donner moi  la 2 nbr");
function calculate(a, b, operation) {
    return operation(a,b) ;
}
let add = (x,y) => x + y ;
let sou = (x,y) => x - y ;
console.log("l'addition",calculate(x,y , add));
console.log("la soustraction ",calculate(x,y , sou));