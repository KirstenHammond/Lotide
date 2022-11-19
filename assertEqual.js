//  ASSERT EQUAL
// Takes two primitive values and returns an assertion if true or false


const assertEqual = (input1, input2) => input1 === input2 ? console.log(`🟢🟢🟢Assertion Passed: ${input1} === ${input2}`) : console.log(`🟥🟥🟥Assertion Failed: ${input1} !== ${input2}`);

//Test Code
assertEqual("Bootcamp", "Bootcamp"); //True (passes)
assertEqual(1, 21); // False (fails)