//MAP
//Take in an array and a callback function and return an array of the first character of the first word in the array

const map = (array, callback) => { //The callback in this case is anonymous as it is called in the callback below
  const results = [];
  for (let item of array) {
    results.push(callback(item)); //The result of call back item will be the first character of each string in the array
  }
  return results;
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

//Test code
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]); // Here is the anonymouse callback, assigned to a variable
console.log(results1); //[ 'g', 'c', 't', 'm', 't' ]
console.log(assertArraysEqual([ 'g', 'c', 't', 'm', 't' ], [ 'g', 'c', 't', 'm', 't' ])) //Passes as they match