//EQUAL OBJECTS
//Compares two objects and determines if the keys and values match. Includes comparing arrays held within value.


const eqObjects = (object1, object2) => {
  let objectKeys1 = Object.keys(object1);
  let objectKeys2 = Object.keys(object2);
  
  if (objectKeys1.length !== objectKeys2.length) {
    return false;
  }
  
  for (let key of objectKeys1) {
    if (Array.isArray(object2[key]) && Array.isArray(object2[key]) && object1[key].length === object2[key].length) { // If both key value pairs are an array and their lengths mathc 
      let isTrue = eqArrays(object1[key], object2[key]); // Obtain the boolean value from calling eqArrays
      {
        if (isTrue) { //If that boolean value is true
          return true;
        }
      }
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};
const eqArrays = require('./eqArrays'); //part of the function above

module.exports = eqObjects;

/*
First part of the solution handling primitive values:

const eqObjects = function (object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length === keys2.length) {
    for (let i of keys1) {
      //console.log("outer loop i=", i); //checking its entering the loop
      if (object1[i] !== object2[i]) {
        return false;
      }
    }
     return true;
  }
  return false;
}

Second part below taking in arrays as key values and implementing eqArrays function
*/

/* const eqObjects = (object1, object2) => {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length === keys2.length) {
    for (let i of keys1) {
      //console.log("outer loop i=", i); //checking its entering the loop
      //console.log("object1[i] = ", object1[i])
      //console.log("object2[i] = ", object2[i])
      //console.log(Array.isArray(object2[i]));
      if (Array.isArray(object2[i]) && Array.isArray(object2[i]) && object1[i].length === object2[i].length) {
        let answer = eqArrays(object1[i], object2[i]);
        //console.log("answer = ", answer);
        {
          if (answer) {
            return true;
          }
        }
      }
      if (object1[i] !== object2[i]) {
        return false;
      }
    }
    return true;

  }
  return false;
}; 

Refactoring below
*/