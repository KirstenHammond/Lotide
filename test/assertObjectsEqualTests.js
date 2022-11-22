//Assert objects equal tests

const assertObjectsEqual = require('../assertObjectsEqual'); //contains eqObjects which contains eqArrays

const eqObjects= require('../eqObjects'); //for test below.
//Test code
const ab = { a: "1", b: [2, 4] };
const ba = { b: [2, 4], a: "1" };

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc));; // false
console.log(assertObjectsEqual(ab, abc)); //fails as they do not match

console.log(eqObjects(ab, ba));; //true
console.log(assertObjectsEqual(ab, ba)); //passes


