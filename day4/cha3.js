const p = require("prompt-sync")()
let str = p(" entrer une mot ") 
var max = 1 ; 
var lettremax = " ";
function maxl(str) {
    for (let i = 0; i < str.length; i++) {
     var cont = 0 ;
     for (let j = 0; j < str.length; j++) {
          if(str[i]===str[j]){
            cont++
          }
        
     }
     if (max<cont ) {
         max = cont;
         lettremax = str[i]
     }
}
return  lettremax
}
console.log("la letrre qui se reppete  est ",maxl(str))
console.log(" reppter ",max , "fois")


    
