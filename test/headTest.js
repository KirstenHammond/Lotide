//Head Tests using m/c

const head = require('../head');
const assert = require("chai").assert;

describe("Head Function - Happy Path", () => {
  it('should return the first index of an array eg 1 from [1,2,3]', () => {
    assert.strictEqual(head([1,2,3]), 1);
  });

  it('should return the first index of an array eg "Hello" from ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

});
