// ASSERT ARRAYS EQUAL
// Takes in two arrays and passes them to eqArrays to obtain a boolean value. Uses that to print a true/false statement

//assertArraysEqual function
const assertArraysEqual = (array1, array2) => { 
  let isEqual = eqArrays(array1, array2); //Accessing eqArrays to obtain a boolean value from comparison
  return isEqual ? `🟢🟢🟢Assertion Passed: ${array1} === ${array2}` : `🟥🟥🟥Assertion Failed: ${array1} !== ${array2}`;
};

//eqArrays referred to in function below
const eqArrays = require('./eqArrays');

//Exported for assertArraysEqualTests.js
module.exports = assertArraysEqual;

