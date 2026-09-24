//Element Existence: Write a function that takes an array and a value,
//  returning true if the value exists in the array and false otherwise (without using .includes()).
var T = []
const p = require("prompt-sync")()
let x = Number( p(" donner moi le nbr des elements de tableux  "))
console.log("entre les elements de tableux ")
for (let i = 0; i < x ; i++) {
    T[i]= Number(p(" entre l'element"))
    console.log(T);   
}
console.log(T) 
function tf(T) {
    trouver = false 
    cont = 0 
    let d = Number( p(" donner moi une valeur  "))
    for (i=0 ; i < x ;i++){
         if(d === T[i]){
            cont++
         }   
    }
    if (cont++ >  0 ) {
        trouver =  true
    }
    
    return (trouver) ;
}
console.log(tf(T))
