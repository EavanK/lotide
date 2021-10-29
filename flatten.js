const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) =>
  assertEqual(JSON.stringify(arr1) === JSON.stringify(arr2), true);


// function flatten
const flatten = arrays => {
  let result = [];

  for (const numbs of arrays) {

    if (Array.isArray(numbs)) {
      
      for (const num of numbs) {

        result.push(num);
      }
    } else {
      result.push(numbs);
    }

  }
  return result;
};


eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
eqArrays(flatten([1, 2, [3, 4, 5], [6]]), [1, 2, 3, 4, 5, 6]);
eqArrays(flatten([[1], 2, 3, [4], 5, [6]]), [1, 2, 3, 4, 5, 6]);