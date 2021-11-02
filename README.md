# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @eavank/lotide`

**Require it:**

`const _ = require('@eavank/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: It will return the first element of the array.
* `function2(tail)`: It will take in an array and return every element except the first element of the given array.
* `function3(middle)`: It will take in an array and return the middle-most element(s) of the given array.
* `function4(flatten)`: Given an array with other arrays inside, it can flatten it into a single-level array.
* `function5(countOnly)`: It will be given an array and an object. It will return an object containing counts of everything that the input object listed.
* `function6(letterPositions)`: It will return all the indices (zero-based positions) in the string where each character is found.
* `function7(findKeyByValue)`: It will help us search for a key on an object where its value matches a given value.
* `function8(eqObjects)`: It takes in two objects and returns true or false, based on a perfect match.
* `function9(eqArrays)`: It takes in two arrays and returns true or false, based on a perfect match.
* `function7(map)`: It will return a new array based on the results of the callback function.
* `function8(takeUntil)`: which will keep collecting items from a provided array until the callback provided returns a truthy value.
* `function9(without)`: It will return a subset of a given array, removing unwanted elements.