
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


/* const without = function (source, itemsToRemove) {
  let newArr = [];
  for (i of source) {
    //console.log("i = ", i); checking
    if (!itemsToRemove.includes(i)) { //if i is not in the itemsToRemove array
      //console.log("i values leftover=", i);//checking
      newArr.push(i);
    }
  } return newArr;
}; 

Refactored to use ternary below :*/


const without = function (source, itemsToRemove) {
  let newArr = [];
  for (i of source) {
    !itemsToRemove.includes(i) ? newArr.push(i) : null;
   } return newArr;
};


//Test Code
console.log(without(["4", 7, 1], ["4"]));
console.log(assertArraysEqual(without(["4", 7, 1], ["4"]), [7, 1]));// testing?? Don't think this is supposed to be within the function? Instructions are unclear.
