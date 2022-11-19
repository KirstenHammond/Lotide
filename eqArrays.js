//EQUAL ARRAYS
// Takes two arrays and returns a boolean value if they are equal


const eqArrays = (array1, array2) => {
      //First check the length is equal
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i in array1) {  
  if (array1[i] !== array2[i]) { // Directly comparing the index values of both arrays
      return false
    }
  } return true;
}


const assertEqual = (input1, input2) => input1 === input2 ? console.log(`🟢🟢🟢Assertion Passed: ${input1} === ${input2}`) : console.log(`🟥🟥🟥Assertion Failed: ${input1} !== ${input2}`);

//Test Code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);