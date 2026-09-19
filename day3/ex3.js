/*Square Function: Write a function square(num) that returns the square of a given number. */
function carre(x) {
    return x*x ;
}
const r = require("prompt-sync")()
let nb = r(" donner moi un nobmre ");
console.log(" le carre est ",carre(nb));