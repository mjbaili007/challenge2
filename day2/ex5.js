/*Count Vowels (Loop): Declare a string variable. 
Use a for loop to iterate over each character of the string and count how many vowels 
(a, e, i, o, u) it contains. */
let name = "anas fgad" ;
let compteur = 0 ;
for(let i = 0 ; name[i] !== undefined  ; i++){
     if (name[i] === 'i' || name[i] === 'e' || name[i] === 'a'|| name[i] === 'o' || name[i] === 'u'){
        compteur++;
     }
}
console.log(compteur)
