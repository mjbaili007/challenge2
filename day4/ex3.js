//Word Replacer: Given a sentence "I love apples",
// use a string method to replace "apples" with "bananas" and log the new sentence.
const p = require("prompt-sync")()
let str = p(" entrer une chaine de caractaire ")
str=str.replace('apples','bananas')
console.log(str)