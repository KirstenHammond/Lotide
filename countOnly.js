//COUNT ONLY
// A function that takes an array list of items and an object of items with true/false values.
//Returns an object with the matching items and how many times they occur on the array list

const countOnly = (allItems, itemsToCount) => {
  let result = {};
  for (let item of allItems) {
    if (itemsToCount[item]) { // If the list containing the truthy values matches the list, and is a truthy value
      !result[item] ? result[item] = 1 : result[item] += 1; //And the object isn't already populated with the item, create it and start the count at zero. Else, add one to the count
    }
  } return result;
}

module.exports = countOnly;



/*
Original code kept for records:

const countOnly = function (allItems, itemsToCount) {
  //console.log("allitems =", allItems);
  //console.log("itemstocount=", itemsToCount);
  let result = {};
  let counter = 1;
  let key = ""; //will refactor later
  for (let i of allItems) {
    key = i;
    //console.log("outer loop i =", i);
    if (itemsToCount[i]) { //if i is a truthy value in itemsToCount
      //console.log("itemstocount[i] that exist=", i);
      if (!result[i]) { //and it doesnt already exist in the result object
        result[key] = counter; //create a new key value pair
      } else { //otherwise if it does exist
        result[key] += 1 //add one to the count
        //console.log("result when truthy = ", result);
        //counter++; //didnt work
      }
    }
  } return result;
} 
Condensed and refactored below:
*/



