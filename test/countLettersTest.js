//Count letters test code

const countLetters = require('../countLetters');
const assert = require("chai").assert;

/* 
const assert = require("chai").assert;

describe("Function name", () => {
  it("should return x from x", () => {
    assert.deepEqual(func(), "exp");
  });
}); 

.isObject(expOutput, error message)
.deepEqual
.strictEqual
*/

describe("countLettersTest", () => {
  it("should return an object", () => {
    assert.isObject(countLetters("hello"), "not an object" );
  });

  it("should return an object detailling how many times the letters occur", () => {
    assert.deepEqual(countLetters("hello"), { h: 1, e: 1, l: 2, o: 1 });
  });

  it("can return an objects key value", () => {
    let checker = countLetters("hello")
    assert.deepEqual(checker["o"], 1);
  });
});
