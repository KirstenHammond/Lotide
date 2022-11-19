//TAKE UNTIL
//Uses a callback function to determine if values in an array are truthy or falsey. In this case, return an array with all of the (falsey) values up until the point that it is truthy.

const takeUntil = (array, callback) => {
  for (let item of array) {
  if (callback(item) === true) {
    return array.slice(0, array.indexOf(item));
  }
 } 
} 

const assertArraysEqual = (array1, array2) => { 
  let isEqual = eqArrays(array1, array2);
  return isEqual ? `🟢🟢🟢Assertion Passed: ${array1} === ${array2}` : `🟥🟥🟥Assertion Failed: ${array1} !== ${array2}`;
};

const eqArrays = (array1, array2) => {
if (array1.length !== array2.length) {
return false;
}
for (let i in array1) {  
if (array1[i] !== array2[i]) {
  return false
}
} return true;
}

//Test code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0); //Providing the instruction for each item
console.log(results1); //[ 1, 2, 5, 7, 2 ]
console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ] )); //Passes

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ','); //Stopping when a comma is encountered
console.log(results2); // [ "I've", 'been', 'to', 'Hollywood' ]
console.log(assertArraysEqual(results2, [ "I've", 'been', 'Hollywood' ])) //Fails as not matching expected output