//eqArrays Test

const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assert = require("chai").assert;

describe("eqArrays", () => {
  it("should return a boolean if two arrays are identical", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("should return a boolean if two arrays are identical", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it("should return a boolean if two arrays are identical", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false);
  });

  it("should return a boolean if two arrays are identical", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
}); 
