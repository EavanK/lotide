const assertEqual = function(actual, expected) {

  console.log((actual === expected) ?
  
    `👍👍👍 Assertion Passed: ${actual} === ${expected}` :
 
    `😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  
};

const eqArrays = (arr1, arr2) => {

  let result = false;

  if (arr1.length === arr2.length) {

    for (let i = 0; i < arr1.length; i++) {

      if (arr1[i] === arr2[i]) result = true;
      
      else return false;
    }
  }
  return result;
};



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

assertEqual(eqArrays([1, '2', 3], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], ['1', 2, 3]), false);