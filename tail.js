//TAIL
//Non Mutating. Returns a new array with every element except the first element.
//Uses assertEqual to test expected length output

const tail = array => array.slice(1);

const assertEqual = (input1, input2) => input1 === input2 ? console.log(`🟢🟢🟢Assertion Passed: ${input1} === ${input2}`) : console.log(`🟥🟥🟥Assertion Failed: ${input1} !== ${input2}`);

//Test Cases
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // A new array of [Lighthouse, Labs]
assertEqual(words.length, 3);// Passes because original array still has three elements as tail is non mutating