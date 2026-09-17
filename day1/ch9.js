/*BMI Calculator: Declare variables for weight (kg) and height (m). 
Calculate the BMI (weight / (height * height)).
 Log the BMI along with a category:"Underweight" (<18.5),
 "Normal" (18.5-24.9), or "Overweight" (>=25). */
let  taille = 1.64 ; 
let poids = 65 ; 
let BMI = poids / (taille * taille);

console.log(poids / (taille * taille))

if (BMI < 18.5 ){
    console.log("Underweight");
} else if  ( BMI < 25 && BMI >18.5 ){
    console.log("normal");
}else 
    console.log("Overweight");