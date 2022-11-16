const eqArrays = function(a, b) {
  //console.log(a);// checking
  // console.log(a.length);//checking
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false; // by entering into this if, it will return false and stop the execution
    }
  } return true; //otherwise if it doesnt enter into the conditional, it'll return true
};


const assertArraysEqual = function(a, b) {
  let bool = eqArrays(a, b);
  return bool ? `🟢🟢🟢Assertion Passed` : `🟥🟥🟥Assertion Failed`;
};



const flattenArray = function(data) {
  let output = [];
  for (let i= 0; i < data.length; i++) {
    //console.log("all data i =", data[i]);
    if (Array.isArray(data[i])) {
      //console.log("is array=", data[i]);
      for (j = 0; j < data[i].length; j++) {
        //console.log("each nested array value=", data[i][j]);
        output.push(data[i][j]);
      } 
    } else { //tried without an else statement but it didnt work!
      output.push(data[i]);
    }
  } return output;
}
console.log(flattenArray([1, 2, [3, 4], 5, [6]])); //works