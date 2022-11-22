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

module.exports = without;
