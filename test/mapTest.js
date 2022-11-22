//Map test
const map = require('../map');


//Test code
const assertArraysEqual = require('../assertArraysEqual');


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]); // Here is the anonymouse callback, assigned to a variable
console.log(results1); //[ 'g', 'c', 't', 'm', 't' ]
console.log(assertArraysEqual([ 'g', 'c', 't', 'm', 't' ], [ 'g', 'c', 't', 'm', 't' ])) //Passes as they match