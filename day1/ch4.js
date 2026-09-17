/*Grading System: Declare a variable score (0-100). 
Use if/else if/else statements to log "A" for 90-100, "B" for 80-89,
 "C" for 70-79, and "F" for anything below 70. */
 let score = 70 ; 
 if (score >= 90 && score <= 100 ) {
    console.log ("A");
 } else if (score >= 80 && score <= 89) {
    console.log ("B");
 } else if (score >= 70 && score <= 79) {
    console.log ("c");
 } else if (score >= 0 &&  score <= 70 ) {
    console.log ("D");
 } else {
    console.log("cet nombre n'admit pas de score");
 }
 

