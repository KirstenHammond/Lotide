//MIDDLE
// If an array has 1 or 2 elements, there is no middle. An empty array will be returned
// If an array has an odd number of elements, the middle most value will be returned
// If an array has an even number of elements, the two middle element values will be returned in an array

//Middle function
const middle = data => {  
  let arr = [];
  let mid = Math.floor(data.length / 2);
  data.length === 1 || data.length === 2 ? arr :
  data.length % 2 !== 0 ? arr.push(data[mid]) : //If the array is odd, push the middle value and return it
  arr.push(data[mid - 1], data[mid]); //Else, (aka if it is even) return the middle value and the one before it 
  return arr;
}

//Exported for middleTests.js
module.exports = middle;

/* 
Initial solution kept for reference :

const middle = function(data) {
  let arr = [];
  mid = Math.floor(data.length/2);
  if (data.length === 1 || data.length === 2) {
    return arr;
  } else if (data.length %2 !== 0) {
      arr.push(data[mid]);
      return arr;
    } arr.push(data[mid-1], data[mid]);
    return arr;
  } 
  
  Refactored below
  */

