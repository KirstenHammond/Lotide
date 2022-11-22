//Count Only tests

const countOnly = require('../countOnly');
const assertEqual = require('../assertEqual');


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


let result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false} );
console.log(result1); //{Fang: 2, Jason:1}
assertEqual(result1["Jason"], 1);//Passes
assertEqual(result1["Karima"], undefined);//Passes
assertEqual(result1["Fang"], 2);//Passes
assertEqual(result1["Agouhanna"], undefined); //Passes

console.log(countOnly(["b", "a", "b", "d", "d", "a", "d", "d"], { a: true, d: true, b: true, f: true }));//{ b: 2, a: 2, d: 4 }

