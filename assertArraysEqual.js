
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

console.log(assertArraysEqual([1,2,3],[1,2,3]));
console.log(assertArraysEqual([1,2,3],[1,"8",3]));