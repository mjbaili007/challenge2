/*Arrow Addition: Write an arrow function add(a, b) that takes two numbers and returns their sum.
 Log the result of calling the function. */ 
 function somme(a,b) {
    return a+b ;
 }
 const p =require("prompt-sync")()
 let n = p ("donner moi le  nombre 1  ");
 let b = p ("donner moi le nombre 2 ");
console.log("la somme est ", somme(n , b));