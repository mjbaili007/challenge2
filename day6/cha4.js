//Oldest Person: Given an array of person objects (each with a name and age), 
//write a function to find and return the name of the oldest person.
let personnes = [
    { nom:"marimar" , age:19 },
    { nom:"sanae", age:17},
    { nom:"soso" , age:33}
]
function maxage(personnes) {
    max = personnes[0].age
    for (let i = 0; i < personnes.length; i++) {
          if (max <personnes[i].age ) {
              max = personnes[i].age
              oldperson = personnes[i].nom 
          }  
    }
    return oldperson
    
} 
console.log("name of the oldest person",maxage(personnes))