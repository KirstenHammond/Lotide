//MIDDLE
// If an array has 1 or 2 elements, there is no middle. An empty array will be returned
// If an array has an odd number of elements, the middle most value will be returned
// If an array has an even number of elements, the two middle element values will be returned in an array

/* 
Initial solution kept for records :

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


const middle = data => {  
  let arr = [];
  let mid = Math.floor(data.length / 2);
  data.length === 1 || data.length === 2 ? arr :
    data.length % 2 !== 0 ? arr.push(data[mid]) : //If the array is odd, push the middle value and return it
      arr.push(data[mid - 1], data[mid]); //Else, (aka if it is even) return the middle value and the one before it 
  return arr;
}

const assertArraysEqual = (array1, array2) => { 
  let isEqual = eqArrays(array1, array2); //Accessing eqArrays to obtain a boolean value from comparison
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

//Test Code
console.log(middle([6])); //[]
console.log(middle([6,7])); //[]
console.log(middle([7,8,9]));//[8]
console.log(middle([10,11,12,13]));//[11,12]

console.log(assertArraysEqual(middle([10,11,12,13]), [11,12]));//Assertion passed
console.log(assertArraysEqual(middle([7,8,9]), [8]));//Assertion passed
console.log(assertArraysEqual(middle([7,8,9,10]), [8]));//Assertion failed, incorrect assertor given