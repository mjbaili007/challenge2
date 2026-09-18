/*FizzBuzz: Loop from 1 to 50. Log "Fizz" if a number is a multiple of 3, 
"Buzz" if a multiple of 5, "FizzBuzz" if both, and the number itself otherwise. */
for (i=1 ; i<=50 ; i++){
    if (i % 3 == 0  && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 5 == 0){
        console.log("Buzz");
    } else if (i % 3 === 0 ){
        console.log("Fizz");
    } else 
        console.log(i);
}