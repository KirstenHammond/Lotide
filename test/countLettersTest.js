//Count letters test code

const countLetters = require('../countLetters');
const assertEqual = require('../assertEqual');

//Test code
console.log(countLetters("hello"));//{ h: 1, e: 1, l: 2, o: 1 }
let checker = countLetters("hello"); 
assertEqual(checker["l"], 2);// Passes as l value in returning object = 2

console.log(countLetters("Hello World"));// { H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1 }
let checker2 = countLetters("Hello World");// 
assertEqual(checker2["o"], 1);// Fails as o occurs twice, not once.