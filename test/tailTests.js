//Tail tests using m/c

const tail = require('../tail');
const assert = require('chai').assert;

describe("Tail function happy path", () => {
  it("should return a new array of every element of an array apart from the first eg [2,3] from [1,2,3]", () => {
    assert.deepEqual(tail([1,2,3]), [2,3]);
  });

});
