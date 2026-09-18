/*Multiplication Table: Choose a number (e.g., 5).
 Use a for loop to print its multiplication table from 1 to 10 (e.g., "5 x 1 = 5", "5 x 2 = 10"). */


const p =require("prompt-sync")()
let nbr = p(" enter une nombre pour faire le tableux de multipliction ")
for (i=0 ; i <=10 ; i++){
    let m = i * nbr ;
    console.log(`${i} * ${nbr} = ${m}`);
}
