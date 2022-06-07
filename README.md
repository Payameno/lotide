# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @beigi.payam/lotide`

**Require it:**

`const _ = require('@beigi.payam/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function2(assertEqual)`: Assertion for equality of basic data types
* `function1(countLetters)`: Counts the number of times a character is used in a string
* `function2(countOnly)`: Counts the number of times an item is repeated in an array
* `function3(eqArrays)`: Comapres two arrays to be equal
* `function1(eqObjects)`: Compares two objects to be equal
* `function2(findKey)`: To find a key in an object by the number of value given to it
* `function3(findKeyByValue)`: To find an object key by its value
* `function1(head)`: Returns the first elemet in an array
* `function2(letterPositions)`: Return indicesin the string where each character is found
* `function3(map)`: Returns a new array based on the results of the callback function
* `function1(middle)`: Returns the middle number in an array
* `function2(tail)`: Removes the first element of an array and returns the rest
* `function3(takeUntil)`: Returns a slice of the array based on what callback function requires
* `function3(without)`: Removes the given value from an array