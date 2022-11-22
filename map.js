//MAP
//Take in an array and a callback function and return an array of the first character of the first word in the array

const map = (array, callback) => { //The callback in this case is anonymous as it is called in the callback below
  const results = [];
  for (let item of array) {
    results.push(callback(item)); //The result of call back item will be the first character of each string in the array
  }
  return results;
}

module.exports = map;

