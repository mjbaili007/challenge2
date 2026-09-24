//In-Stock Filter: 
//Given an array of product objects (each with name, price, and inStock boolean), 
//return a new array containing only the products that are in stock.
let personnes = [
    { nom:"oronge",price:8,inStock: true},
    { nom:"banan", price:14,inStock: false},
    { nom:"pomme",price:12,inStock: true}
] 
let newpersones = []
for (let i = 0; i < personnes.length; i++) {
    if (personnes[i].inStock) {
        newpersones.push(personnes[i])
} 
}
console.log(newpersones)
let i;
for ( i = 0; i < personnes.length; i++) {
    if (personnes[i].inStock==false) {
        delete personnes[i]
        break
    } 
}
    for (let j = i ; j < personnes.length; j++) { 
        personnes[j] = personnes[j+1]
}   
console.log(personnes);
                                                                                                                                                                                                                                                                                                                                                                            