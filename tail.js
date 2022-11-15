const assertEqual = function(actual, expected) {
  return actual === expected ? console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`) : console.log(`🟥🟥🟥Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function(array) {
  return array.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);//passes because original array still has three elements!