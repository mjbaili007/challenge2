//Mettre les mots en majuscule : 
//Écrivez une fonction qui prend une phrase et met en majuscule la première lettre de chaque mot 
const p = require("prompt-sync")()
let str = p(" entrer une chaine de caractaire ")
function première_majuscule(str) {
     let x = " "
    if (str[0]!==" ") {
            x += str[0].toUpperCase();
        }
    for (let i = 1; i < str.length; i++) {
         if (str[i-1]===" ") {
            x += str[i].toUpperCase();   
         }else{
            x += str[i]
         }
    }
    console.log(x)
} 
première_majuscule(str)