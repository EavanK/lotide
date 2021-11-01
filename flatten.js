const assertArraysEqual = (arr1, arr2) => {

  console.log((eqArrays(arr1, arr2)) ?

    `👍👍👍 Assertion Passed: ${arr1} === ${arr2}` :

    `😡😡😡 Assertion Failed: ${arr1} !== ${arr2}`);
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


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4, 5], [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[1], 2, 3, [4], 5, [6]]), [1, 2, 3, 4, 5, 6]);