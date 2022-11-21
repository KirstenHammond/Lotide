//EQUAL ARRAYS
// Takes two arrays and returns a boolean value if they are equal


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
}


module.exports = eqArrays;
