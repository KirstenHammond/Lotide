const assertEqual = function(actual, expected) {
  return actual === expected ? console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`) : console.log(`🟥🟥🟥Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(a, b) {
 //console.log(a);// checking
// console.log(a.length);//checking
 for (let i = 0; i < a.length; i++) {
  if (a[i] !== b[i]) {
    return false; // by entering into this if, it will return false and stop the execution
  }
 } return true; //otherwise if it doesnt enter into the conditional, it'll return true
}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);