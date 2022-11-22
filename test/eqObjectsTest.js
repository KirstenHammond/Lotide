//eqObject test

const eqObjects= require('../eqObjects'); //includes eqArrays require


const assertEqual = require('../assertEqual'); //for tests below
//Test cases

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1" };
//console.log(eqObjects(ab,ba));; 
assertEqual(eqObjects(ab,ba), true); //True

const abc = { a: "1", b: "2", c: "3" };
//console.log(eqObjects(ab, abc));
assertEqual(eqObjects(ab,abc), true) //False as they do not match


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//console.log(eqObjects(cd, dc)); 
assertEqual(eqObjects(cd,dc), false) //False as they do match

const cd2 = { c: "1", d: ["2", 3, 4]};
//console.log(eqObjects(cd, cd2)); 
assertEqual(eqObjects(cd2,dc), false); //true as they do not match
