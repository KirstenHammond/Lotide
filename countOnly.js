/* 
Given a list of items and a seperate list of specific items to count, iterate through and return the counts of those specific items highlighted
*/

const assertEqual = function (input1, input2) {
  return input1 === input2 ? console.log(`🟢🟢🟢Assertion Passed: ${input1} === ${input2}`) : console.log(`🟥🟥🟥Assertion Failed: ${input1} !== ${input2}`);
};

/* const countOnly = function (allItems, itemsToCount) {
  //console.log("allitems =", allItems);
  //console.log("itemstocount=", itemsToCount);
  let result = {};
  let counter = 1;
  let key = ""; //will refactor later
  for (i of allItems) {
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

const countOnly = function (allItems, itemsToCount) {
  let result = {};
  for (i of allItems) {
    if (itemsToCount[i]) {
      !result[i] ? result[i] = 1 : result[i] += 1;
    }
  } return result;
}

//console.log(countOnly(["b", "a", "b", "d", "d", "a", "d", "d"], { a: true, d: true, b: true, f: true }));

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

let result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false} );
console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);