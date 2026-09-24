//  Supprimer les doublons :
//  Écrivez une fonction qui prend un tableau contenant des valeurs en double et
//  renvoie un nouveau tableau ne contenant que des valeurs uniques.
let T = []

const p = require("prompt-sync")()
let x = Number (p(" donner moi le nbr des elements de tableux  "))
console.log("entre les elements de tableux ")
for (let i = 0; i < x ; i++) {
    T[i]= Number (p(" entre l'element "))   
}

console.log(T) 
function  suppdoub(T) {
let L = []; 
for (let i = 0; i < T.length; i++) {
      var trouver = false 
     for (let j = 0 ; j < L.length; j++) {
      
           if (T[i]==L[j]) {
               trouver = true ;
               break
           }

     }
     if(trouver === false){
        L.push(T[i]);
     }
}
     
     return L;
    
     
}
console.log(suppdoub(T));
