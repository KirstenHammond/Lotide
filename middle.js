
const eqArrays = function (array1, array2) {
  for (let i of array1.keys()) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function (array1, array2) {
  let isEqual = eqArrays(array1, array2);
  return isEqual ? `🟢🟢🟢Assertion Passed` : `🟥🟥🟥Assertion Failed`;
};

//for arrays with 1 or 2 elements, there is no middle. retrn empty array.
//for arrays with odd number of elements, returned array.length should = 1
//for even numbers, return the middle most elements

/* 
Initial solution:
const middle = function(data) {
  let arr = [];
  mid = Math.floor(data.length/2);
  if (data.length === 1 || data.length === 2) {
    return arr;
  } else if (data.length %2 !== 0) {
      arr.push(data[mid]);
      return arr;
    } arr.push(data[mid-1], data[mid]);
    return arr;
  } 
  
  Refactored below
  */


const middle = function (data) {
  let arr = [];
  mid = Math.floor(data.length / 2);
  data.length === 1 || data.length === 2 ? arr :
    data.length % 2 !== 0 ? arr.push(data[mid]) :
      arr.push(data[mid - 1], data[mid]);
  return arr;
}

//Test Code
console.log(middle([6]));
console.log(middle([6,7]));
console.log(middle([7,8,9]));
console.log(middle([10,11,12,13]));

console.log(assertArraysEqual(middle([10,11,12,13]), [11,12]));
console.log(assertArraysEqual(middle([7,8,9]), [8]));