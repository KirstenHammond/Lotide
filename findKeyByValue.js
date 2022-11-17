const assertEqual = function(input1, input2) {
  return input1 === input2 ? console.log(`🟢🟢🟢Assertion Passed: ${input1} === ${input2}`) : console.log(`🟥🟥🟥Assertion Failed: ${input1} !== ${input2}`);
};

const findKeyByValue = function(object, value) {
  let keys = Object.keys(object);
  //console.log(keys); checking
  for (i of keys) {
    if (object[i] === value) {
      return i;
    }
  }
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);