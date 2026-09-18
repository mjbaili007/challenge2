/*Right-Angled Triangle:
 Use nested for loops to draw a right-angled triangle of stars in the console (height of 5). */
 for (let i=0 ; i <=5 ; i++){
    let ligne = "";
    for(j=1 ; j <= i ; j++){
        ligne +="* ";
    }
    console.log(ligne);
}
