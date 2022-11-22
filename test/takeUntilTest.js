//Take until test

const takeUntil = require('../takeUntil');

//Test code

const assertArraysEqual = require('../assertArraysEqual');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0); //Providing the instruction for each item
console.log(results1); //[ 1, 2, 5, 7, 2 ]
console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ] )); //Passes

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ','); //Stopping when a comma is encountered
console.log(results2); // [ "I've", 'been', 'to', 'Hollywood' ]
console.log(assertArraysEqual(results2, [ "I've", 'been', 'Hollywood' ])) //Fails as not matching expected output