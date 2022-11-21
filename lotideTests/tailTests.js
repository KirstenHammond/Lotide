//Tail tests

const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // A new array of [Lighthouse, Labs]
assertEqual(words.length, 3);// Passes because original array still has three elements as tail is non mutating

