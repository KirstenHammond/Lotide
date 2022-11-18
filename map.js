/* let numbers = [1,2,3,4]

let ourMap = (array, callback) => {
  let output = [];
  for (let element of array) {
    let returnVal = callback(element)
    output.push(returnVal);
  }
  return output;
}

let doOnEachLoop = num => {
  return num * 2;
}

let finalArray = ourMap(numbers, doOnEachLoop)
console.log(finalArray) */

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);


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


console.log(assertArraysEqual([ 'g', 'c', 't', 'm', 't' ], [ 'g', 'c', 't', 'm', 't' ]))