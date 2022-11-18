//create a function that uses a callback function to determine if values in an array are truthy or falsey. if truthy, return an array with all of the values up until the point that it is truthy.
const takeUntil = function(array, callback) {
  for (let item of array) {
  if (callback(item) === true) {
    return array.slice(0, array.indexOf(item));
  }
 } 
}

//const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
//const results1 = takeUntil(data1, x => x < 0);
//console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false
    }
  } return true;
}

const assertArraysEqual = function (array1, array2) {
  let isEqual = eqArrays(array1, array2);
  return isEqual ? `🟢🟢🟢Assertion Passed: ${array1} === ${array2}` : `🟥🟥🟥Assertion Failed: ${array1} != ${array2}`;
};

console.log(assertArraysEqual([ "I've", 'been', 'to', 'Hollywood' ], [ "I've", 'been', 'to', 'Hollywood' ]))