/* Math Callback: Write a higher-order function calculate(a, b, operation) where operation is a callback function.
 Call it twice passing different arrow functions for addition and subtraction. */
const r = require ("prompt-sync")()
let x  = r("donner moi une nbr");
let y = r("donner moi  la 2 nbr");
console.log(" + OU - OU / OU * ");
let oppe = r("donner moi l'opperation qui tu veux  ");
while (oppe !== "-" && oppe !== "*" && oppe !=="+" && oppe !== "+" ) {
    oppe = r("donner moi une opperation   ");
}
function calculate(a, b, operation) {
    switch (operation) {
        case "-" :
            let so = a - b ; 
            console.log("la soustraction est ", so)
            break;
        case "+" :
            let s = a + b ; 
            console.log("la somme est ", s)
            break;
        case "*" :
            let m = a * b ; 
            console.log("la multiplication est ", m)
            break;
        case "/" :
            if (b === 0 ){
                console.log(" impossible")
            }else {
                 let div = a / b ; 
                console.log("division  est ",div)
            }
            break;
        default:
            console.log(" bay ");
            break;
    }
}
console.log(calculate(x, y, oppe))


