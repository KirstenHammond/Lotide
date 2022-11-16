const assertEqual = function(input1, input2) {
  return input1 === input2 ? console.log(`🟢🟢🟢Assertion Passed: ${input1} === ${input2}`) : console.log(`🟥🟥🟥Assertion Failed: ${input1} !== ${input2}`);
};

const eqArrays = function (array1, array2) {
  //console.log(array1.keys());
  for (let i of array1.keys()) {
    //console.log("this is i =", i);
    //console.log("this is [i] =", actual[i]);
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
};

//Test Code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);