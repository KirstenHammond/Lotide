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


module.exports = flattenArray;

