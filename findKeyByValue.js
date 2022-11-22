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

module.exports = findKeyByValue;

