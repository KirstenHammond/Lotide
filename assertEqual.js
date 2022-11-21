//  ASSERT EQUAL
// Takes two primitive values and returns an assertion if true or false

//assertEqual function
const assertEqual = (input1, input2) => input1 === input2 ? console.log(`🟢🟢🟢Assertion Passed: ${input1} === ${input2}`) : console.log(`🟥🟥🟥Assertion Failed: ${input1} !== ${input2}`);

//exporting it for modular use
module.exports = assertEqual;