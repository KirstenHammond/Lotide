// FUNCTION IMPLEMENTATION
const assertEqual = function(input1, input2) {
  return input1 === input2 ? console.log(`🟢🟢🟢Assertion Passed: ${input1} === ${input2}`) : console.log(`🟥🟥🟥Assertion Failed: ${input1} !== ${input2}`);
};


//Test Code
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 21);