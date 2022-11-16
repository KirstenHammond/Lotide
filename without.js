
const eqArrays = function(a, b) {
  //console.log(a);// checking
  // console.log(a.length);//checking
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false; // by entering into this if, it will return false and stop the execution
    }
  } return true; //otherwise if it doesnt enter into the conditional, it'll return true
};

const assertArraysEqual = function(a, b) {
  let bool = eqArrays(a, b);
  return bool ? `🟢🟢🟢Assertion Passed` : `🟥🟥🟥Assertion Failed`;
};


const without = function(source, itemsToRemove) {
  let newArr = [];
  for (i of source) {
  //console.log(i); checking
    if (!itemsToRemove.includes(i)) { //if i is not in the itemsToRemove array
    //console.log(i);//checking
      newArr.push(i); //then push that value to a new array
    }
  } console.log(assertArraysEqual(source, ["4", "7", "1"]));// testing?? Don't think this is supposed to be within the function? Instructions are unclear.
  return newArr;
};

console.log(without(["4", "7", "1"], ["1", "4"]));


