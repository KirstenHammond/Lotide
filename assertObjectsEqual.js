//ASSERT EQUAL OBJECTS
//Used eqObjects to obtain boolean value from comparing two objects and outputs a true/false message

const assertObjectsEqual = (object1, object2) => {
  const inspect = require('util').inspect;
  //console.log(`example label : ${inspect(object1)}`);
  let isObjectEqual = eqObjects(object1, object2); //Obtaining a boolean output from comparing the two objects
  return isObjectEqual ? `🟢🟢🟢Assertion Passed: ${inspect(object1)} === ${inspect(object2)}` : `🟥🟥🟥Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`;
}

const eqObjects = require("./eqObjects");
module.exports = assertObjectsEqual;


/* const eqObjects = (object1, object2) => {
  let objectKeys1 = Object.keys(object1);
  let objectKeys2 = Object.keys(object2);

  if (objectKeys1.length !== objectKeys2.length) {
    return false;
  }

  for (let key of objectKeys1) {
    if (Array.isArray(object2[key]) && Array.isArray(object2[key]) && object1[key].length === object2[key].length) { // If both key value pairs are an array and their lengths mathc 
      let isTrue = eqArrays(object1[key], object2[key]); // Obtain the boolean value from calling eqArrays
        if (isTrue) { //If that boolean value is true
          return true;
      }
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const eqArrays = (array1, array2) => {
  //First check the length is equal
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i in array1) {
    if (array1[i] !== array2[i]) { // Directly comparing the index values of both arrays
      return false
    }
  } return true;
} */


