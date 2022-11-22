//Without tests

const without = require('../without');

//Test Code
const assertArraysEqual = require('../assertArraysEqual');

console.log(without(["4", 7, 1], ["4"])); // [7,1]
console.log(assertArraysEqual(without(["4", 7, 1], ["4"]), [7, 1])); //This is the expected result, so the assertion passes
console.log(without([6,3,6,24,4,2,2], [6,2]));// [3,24,4] 
console.log(assertArraysEqual(without([6,3,6,24,4,2,2],[6,2]),[ 3, 24, 4646 ]));// Fails because expected is different to the output