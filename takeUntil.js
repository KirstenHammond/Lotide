//TAKE UNTIL
//Uses a callback function to determine if values in an array are truthy or falsey. In this case, return an array with all of the (falsey) values up until the point that it is truthy.

const takeUntil = (array, callback) => {
  for (let item of array) {
  if (callback(item) === true) {
    return array.slice(0, array.indexOf(item));
  }
 } 
} 

module.exports = takeUntil;
