/*Leap Year Checker: Declare a year variable.
 Write a condition to check if it's a leap year (divisible by 4 AND NOT divisible by 100, 
 UNLESS it's divisible by 400).
 Log true or false.*/
 let annee = 2024 ; 
 if ((annee % 4 === 0 && annee % 100 != 0) || annee % 400 ===0 ){
     console.log("true");
 }else {
    console.log("false");
 }