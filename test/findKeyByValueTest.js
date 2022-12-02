//Find key by value test

const findKeyByValue = require('../findKeyByValue');

const assert = require("chai").assert;

describe("Function name", () => {
  it("should return x from x", () => {
    assert.deepEqual(func(), "exp");
  });
}); 

//Test code
const assertEqual = require('../assertEqual');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); //Passes
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);//Passes as this doesnt exist

const animals = {
  cat: "Oscar", 
  dog: "Muesli",
  neighboursDog: "Ellie"
}

assertEqual(findKeyByValue(animals, "Muesli"), "cat");// Fails as dog is expected key