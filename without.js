//WITHOUT
//Takes in an array and a value and returns a new array with the value removed from the original array.
//Uses assertArraysEqual and eqArrays to determine if the expected result is correct


/* 
Original code- kept for records.

const without = function (source, itemsToRemove) {
  let newArr = [];
  for (let i of source) {
    //console.log("i = ", i); checking
    if (!itemsToRemove.includes(i)) { //if i is not in the itemsToRemove array
      //console.log("i values leftover=", i);//checking
      newArr.push(i);
    }
  } return newArr;
}; 

Refactored to use ternary below :*/


const without = (source, valuesToRemove) => {
  let newArr = [];
  for (let item of source) {
    !valuesToRemove.includes(item) ? newArr.push(item) : null;
   } return newArr;
};


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

//Test Code
console.log(without(["4", 7, 1], ["4"])); // [7,1]
console.log(assertArraysEqual(without(["4", 7, 1], ["4"]), [7, 1])); //This is the expected result, so the assertion passes
console.log(without([6,3,6,24,4,2,2], [6,2]));// [3,24,4] 
console.log(assertArraysEqual(without([6,3,6,24,4,2,2],[6,2]),[ 3, 24, 4646 ]));// Fails because expected is different to the output