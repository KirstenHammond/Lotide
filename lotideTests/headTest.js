//Head tests

const assertEqual = require('../assertEqual');
const head = require("../head")

assertEqual(head([5, 6, 7]), 5); // True
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs"); //False