//Palindrome Check:
//Write a function that checks if a string is a palindrome (reads the same backwards and forwards).

const p = require("prompt-sync")() 
let str = p(" entrer une chaine de caractaire ") 
 
function write(str) { 
    let cont = 0
    let x = str.length / 2; 
    if (str.length % 2 != 0) { 
        x = x - 0.5; 
    } 
    for (let i = 0; i < x; i++) { 
        let j = str.length - 1 - i; 
        if (str[i] == str[j]) { 
            cont++ 
        }
        console.log(cont) 
    } 
    console.log(x)   
    if (cont == x) { 
        console.log(" c'est un memoir") 
    } else { 
        console.log(" n'est pas  un memoir") 
    } 
} 

write(str)




