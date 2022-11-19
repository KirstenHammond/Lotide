// ASSERT ARRAYS EQUAL
// Takes in two arrays and passes them to eqArrays to obtain a boolean value. Uses that to print a true/false statement

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
console.log(assertArraysEqual([7, 2, 3], [7, 2, 3])); //Passes
console.log(assertArraysEqual([1, 4, 3], [1, 2, 3])); //Fails