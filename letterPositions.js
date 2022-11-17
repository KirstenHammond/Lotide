/* 
const letterPositions = function (string) {
  let result = {};
  for (i in string) {
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

console.log(letterPositions("hello"));
Works but is hella long and looks terrible.

Refactored below
*/

const letterPositions = function (string) {
  let result = {};
  for (let i in string) {
    result[string[i]] ? result[string[i]].push(i) : result[string[i]] = [i];
    }  return result;
  }

console.log(letterPositions("hello"));