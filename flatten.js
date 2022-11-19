//FLATTEN
//Takes in an array of arrays and returns a new array with all values flattened into one array


const flattenArray = array => {
  let output = [];
  for (let i= 0; i < array.length; i++) {
    //console.log("all array i =", array[i]);
    if (Array.isArray(array[i])) {
      //console.log("is array=", array[i]);
      for (j = 0; j < array[i].length; j++) {
        //console.log("each nested array value=", array[i][j]);
        output.push(array[i][j]);
      } 
    } else { //tried without an else statement but it didnt work!
      output.push(array[i]);
    }
  } return output;
}

const assertArraysEqual = (array1, array2) => { 
  let isEqual = eqArrays(array1, array2); //Accessing eqArrays to obtain a boolean value from comparison
  return isEqual ? `🟢🟢🟢Assertion Passed: ${array1} === ${array2}` : `🟥🟥🟥Assertion Failed: ${array1} !== ${array2}`;
};

const eqArrays = (array1, array2) => {
if (array1.length !== array2.length) {
return false;
}
for (let i in array1) {  
if (array1[i] !== array2[i]) {
  return false
}
} return true;
}

//Test Code
console.log(flattenArray([1, 2, [3, 4], 5, [6]])); //works
console.log(assertArraysEqual(flattenArray([1,[2,3],[4,5]]), [1,2,3,4,5])); //Passes
