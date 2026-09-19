/*String Emptiness Check:
 Write an arrow function isEmpty(str) that returns true if a string is empty or contains only spaces,
 and false otherwise. */
 function isEmpty(str){
  for (let i = 0; i < str.length; i++) {
     if (str[i] === " " )
       return false ;
    }
    return true ;
}

 const r = require ("prompt-sync")()
 let X = r("donner moi une chaine de caractaire ");
 console.log(isEmpty(X))
