# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kirstenhammond/lotide`

**Require it:**

`const _ = require('@kirstenhammond/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the first the value of the first index in an array

* `tail(array)`: Non Mutating. Returns a new array with every element except the first element.

* `middle(array)`: If an array has 1 or 2 elements, there is no middle. An empty array will be returned. If an array has an odd number of elements, the middle most value will be returned. If an array has an even number of elements, the two middle element values will be returned in an array

* `assertArraysEqual(array1, array2)`: Takes in two arrays and passes them to eqArrays to obtain a boolean value. Uses that to print a true/false statement

* `assertEqual(value1, value2)`: Takes two primitive values and returns an assertion if true or false

* `assertObjectsEqual(object1, object2)`: Used eqObjects to obtain boolean value from comparing two objects and outputs a true/false message

* `countLetters(string)`: Take in a string and return an object that contains the characters as Keys and the number of occurences as values

* `countOnly(allItems, itemsToCount)`: A function that takes an array list of items and an object of items with true/false values.Returns an object with the matching items and how many times they occur on the array list

* `eqArrays(array1, array2)`: Takes two arrays and returns a boolean value if they are equal

* `eqObjects(object1, object2)`: Compares two objects and determines if the keys and values match. Includes comparing arrays held within value.

* `findKey(object, callback)`: Takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined

* `findKeyByValue(object, value)`: Takes an object and a value and loops through the object values to find a match. Returns the key name.

* `flattenArray(array)`: Takes in an array of arrays and returns a new array with all values flattened into one array

* `letterPositions(string)`: Takes in a string and returns an object with string characters for keys and the values containing an array of the index number at which the character occurs

* `map(array, callback)`: Takes in an array and a callback function and return an array of the first character of the first word in the array

* `takeUntil(array, callback)`: Uses a callback function to determine if values in an array are truthy or falsey. In this case, return an array with all of the (falsey) values up until the point that it is truthy.

* `without(source, valuesToRemove)`: Takes in an array and a value and returns a new array with the value removed from the original array.
