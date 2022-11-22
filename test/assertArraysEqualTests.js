//assertArraysEqual tests
//eqArrays is already required in the root file so assertArraysEqual pulls this function through that require

const assertArraysEqual = require('../assertArraysEqual');

console.log(assertArraysEqual([7, 2, 3], [7, 2, 3])); //Passes
console.log(assertArraysEqual([1, 4, 3], [1, 2, 3])); //Fails