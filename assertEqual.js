// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  return actual === expected ? console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`) : console.log(`🟥🟥🟥Assertion Failed: ${actual} !== ${expected}`);
};

assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 21);