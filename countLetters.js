const assertEqual = function(input1, input2) {
  return input1 === input2 ? console.log(`🟢🟢🟢Assertion Passed: ${input1} === ${input2}`) : console.log(`🟥🟥🟥Assertion Failed: ${input1} !== ${input2}`);
};


const countLetters= function (string) {
  let result = {};
  for (i of string) {
    !result[i] ? result[i] = 1 : result[i] += 1;
  } return result;
}
console.log(countLetters("hello"));

let checker = countLetters("hello");
console.log(assertEqual(checker["l"], 2));//should pass as l value in returning object = 2