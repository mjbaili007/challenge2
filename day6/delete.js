let personnes = [
    { nom:"oronge",price:8,inStock: true},
    { nom:"banan", price:14,inStock: false},
    { nom:"pomme",price:12,inStock: true}
] 
let i;
for ( i = 0; i < personnes.length; i++) {
    if (personnes[i].inStock==false) {
        delete personnes[i]
        break
    } 
}
for (let j = i+1 ; j < personnes.length; j++) { 
        personnes[j-1] = personnes[j]
}  

personnes.pop()
console.log(personnes);