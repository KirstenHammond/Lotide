//COUNT LETTERS
//Take in a string and return an object that contains the characters as Keys and the number of occurences as values

const countLetters= string => {
  let result = {};
  for (let character of string) {
    !result[character] ? result[character] = 1 : result[character] += 1; //If the object isnt already populated with the character and count, create it = zero. Else, add one to the existing count.
  } return result;
}

const assertEqual = (input1, input2) => input1 === input2 ? console.log(`🟢🟢🟢Assertion Passed: ${input1} === ${input2}`) : console.log(`🟥🟥🟥Assertion Failed: ${input1} !== ${input2}`);

//Test code
console.log(countLetters("hello"));//{ h: 1, e: 1, l: 2, o: 1 }
let checker = countLetters("hello"); 
assertEqual(checker["l"], 2);// Passes as l value in returning object = 2

console.log(countLetters("Hello World"));// { H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1 }
let checker2 = countLetters("Hello World");// 
assertEqual(checker2["o"], 1);// Fails as o occurs twice, not once.