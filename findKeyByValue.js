//FIND KEY BY VALUE
//Takes an object and a value and loops through the object values to find a match. Returns the key name.

const findKeyByValue = (object, value) => {
  let keys = Object.keys(object); // An array containing the key names
  for (let key of keys) {
    if (object[key] === value) { //Accessing the object value when it matches the value provided
      return key; //Returns it and stops the loop
    }
  }
};

const assertEqual = (input1, input2) => input1 === input2 ? console.log(`🟢🟢🟢Assertion Passed: ${input1} === ${input2}`) : console.log(`🟥🟥🟥Assertion Failed: ${input1} !== ${input2}`);

//Test code
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