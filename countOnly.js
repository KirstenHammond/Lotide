//COUNT ONLY
// A function that takes an array list of items and an object of items with true/false values.
//Returns an object with the matching items and how many times they occur on the array list

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

const countOnly = (allItems, itemsToCount) => {
  let result = {};
  for (let item of allItems) {
    if (itemsToCount[item]) { // If the list containing the truthy values matches the list, and is a truthy value
      !result[item] ? result[item] = 1 : result[item] += 1; //And the object isn't already populated with the item, create it and start the count at zero. Else, add one to the count
    }
  } return result;
}


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const assertEqual = (input1, input2) => input1 === input2 ? console.log(`🟢🟢🟢Assertion Passed: ${input1} === ${input2}`) : console.log(`🟥🟥🟥Assertion Failed: ${input1} !== ${input2}`);

let result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false} );
console.log(result1); //{Fang: 2, Jason:1}
assertEqual(result1["Jason"], 1);//Passes
assertEqual(result1["Karima"], undefined);//Passes
assertEqual(result1["Fang"], 2);//Passes
assertEqual(result1["Agouhanna"], undefined); //Passes

console.log(countOnly(["b", "a", "b", "d", "d", "a", "d", "d"], { a: true, d: true, b: true, f: true }));//{ b: 2, a: 2, d: 4 }


