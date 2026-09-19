/*Temperature Converter:
 Write a function celsiusToFahrenheit(c) that converts Celsius to Fahrenheit and returns the result.
 Formula: (C * 9/5) + 32. */ 
 function celsiusToFahrenheit(C) {
    return (C * 9/5) + 32. 
 }
 const r = require ("prompt-sync")()
 let T = r("donner moi la temperature qui tu veut convertir");
 console.log(" la temperature en Fahrenheit est ",celsiusToFahrenheit(T));