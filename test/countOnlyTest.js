//Count Only tests

const countOnly = require('../countOnly');
const assert = require("chai").assert;

describe("countOnly", () => {
  it("should return an object with a count of how many times items in an array occurred", () => {
    assert.deepEqual(countOnly(["b", "a", "b", "d", "d", "a", "d", "d"], { a: true, d: true, b: true, f: true }), { b: 2, a: 2, d: 4 });
  });
  
  it("should return an object with a count of how many times items in an array occurred", () => {
    assert.deepEqual(result1, {Fang: 2, Jason:1});
  });

  it("should access a specific value of the object returned", () => {
    assert.deepEqual(result1["Jason"], 1);
  });

  it("should return undefined if a value is not in the object", () => {
    assert.deepEqual(result1["Karima"], undefined);
  });
  
}); 


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


