const eqArrays = function (array1, array2) {
  //console.log(array1.keys());
  for (let i of array1.keys()) {
    //console.log("this is i =", i);
    //console.log("this is [i] =", actual[i]);
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function (array1, array2) {
  let isEqual = eqArrays(array1, array2);
  return isEqual ? `🟢🟢🟢Assertion Passed` : `🟥🟥🟥Assertion Failed`;
};


//Test code
console.log(assertArraysEqual([7, 2, 3], [7, 2, 3]));
console.log(assertArraysEqual([1, 4, 3], [1, 2, 3]));