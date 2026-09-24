//Cart Total: Given an array of objects representing a shopping cart (each item has price and quantity),
//calculate the total cost of the cart.
let cart = [
    { price: 100, quantity: 2 },
    { price: 50, quantity: 3 },
    { price: 200, quantity: 1 }
];
let somme = 0 
for (let i = 0; i < cart.length; i++) {
     somme += cart[i].price * cart[i].quantity 
} 
console.log(" la somme est ",somme,"DH")
