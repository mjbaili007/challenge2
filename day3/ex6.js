/*Factorial Calculator:
 Write a function factorial(n) that uses a loop inside it to calculate and return the factorial of n. */
 function factoriele(n) {
    if (n === 1 || n === 0 ){
        return 1 ;
    }else
        var F = 1 ;
        for (i=1 ; i <= n ; i++){
          F *= i ;  
        }
        return F  
 }
 const r = require ("prompt-sync")()
 let f = r("donner moi une nbr");
 console.log(" la factorielle  est ",factoriele(f));