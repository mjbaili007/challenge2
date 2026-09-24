
const p = require("prompt-sync")()
let arct = Number( p(" donner moi le nbr des articles "))
if (arct==1) {
    console.log("le prix  de article est 125 DH ")
}else{
    som = 0 ;
    for (let i = 0 ; i < arct*2; i+=2) {
        
        som = 125 - (125 * i / 100 )
    }
    console.log(som)
}