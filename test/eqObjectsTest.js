//eqObject test

const eqObjects= require('../eqObjects'); //includes eqArrays require
const assert = require("chai").assert;

describe("eqObjects", () => {
  it("should compare two objects and return a boolean value", () => {
    assert.deepEqual(eqObjects(ab,ba), true);
  });

  it("should compare two objects and return a boolean value", () => {
    assert.deepEqual(eqObjects(ab,abc), false);
  });

  it("should compare two objects and return a boolean value", () => {
    assert.deepEqual(eqObjects(cd,dc), true);
  });

  it("should compare two objects and return a boolean value", () => {
    assert.deepEqual(eqObjects(cd2,dc), false);
  });
}); 

//Test cases

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4]};
