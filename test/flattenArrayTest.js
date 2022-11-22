//Flatten Array Test

const flattenArray = require('../flattenArray');


//Test Code

const assertArraysEqual = require('../assertArraysEqual'); //contains eqArrays

console.log(flattenArray([1, 2, [3, 4], 5, [6]])); //works
console.log(assertArraysEqual(flattenArray([1,[2,3],[4,5]]), [1,2,3,4,5])); //Passes
