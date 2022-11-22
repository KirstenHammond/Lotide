//Middle tests using m/c

const middle = require('../middle');
const assert = require("chai").assert;


describe("Middle Function - Happy Path", () => {
  it('should return an emtpy array if the array length =1 || =2', () => {
    assert.deepEqual(middle([1,2]), []);
  });
  
  it('should return the the middle index if length is odd', () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);
  });

  it('should return the the middle two indices if length is even', () => {
    assert.deepEqual(middle([10,11,12,13]), [11,12]);
  });
  
});
