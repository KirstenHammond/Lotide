
//HEAD
//Returns the first item in an array
//Assert equal used to test the expected value passes/fails

const head = array => array[0];

const assertEqual = (input1, input2) => input1 === input2 ? console.log(`🟢🟢🟢Assertion Passed: ${input1} === ${input2}`) : console.log(`🟥🟥🟥Assertion Failed: ${input1} !== ${input2}`);

//Test cases
assertEqual(head([5, 6, 7]), 5); // True
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs"); //False