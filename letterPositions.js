//Letter Positions
//Takes in a string and returns an object with string characters for keys and the values containing an array of the index number at which the character occurs

/* 
Original code kept for reference:

const letterPositions = function (string) {
  let result = {};
  for (let i in string) {
    let key= string[i];
    let arr = [i];
    if (!result[key]) {
      result[key] = arr;
     } else {
        let existingPosition = result[key];
        existingPosition.push(i);
        result[key] = existingPosition;
     }
  } return result;
}

Works but looks terrible.

Refactored below:
*/

const letterPositions = string => {
  let result = {};
  for (let item in string) {
    result[string[item]] ? result[string[item]].push(item) : result[string[item]] = [item]; //If the object already contains the character and array, push the index into the array. Else, create and assign the key/value pair
    }  return result;
  }

//Test code
console.log(letterPositions("hello")); // { h: [ '0' ], e: [ '1' ], l: [ '2', '3' ], o: [ '4' ] }