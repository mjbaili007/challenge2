/*Prime Numbers: Use a loop to find and log all prime numbers between 1 and 50. 
(A prime number is only divisible by 1 and itself). */
let comp = 0 ;
for(let i = 1 ; i<=50 ; i++){
    for(let j = 1 ;j<=i; j++){
        if(i%j==0){
            comp++
        }
    }
    if (comp <= 2 ) {
        console.log(i," c'est un nombre premier");
    }else{
        console.log(i, "n'est pas  nomber est premier");
    }
    comp=0;
    }