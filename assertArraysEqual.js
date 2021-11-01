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


const assertArraysEqual = (arr1, arr2) => {

  console.log((eqArrays(arr1, arr2)) ?

    `👍👍👍 Assertion Passed: ${arr1} === ${arr2}` :

    `😡😡😡 Assertion Failed: ${arr1} !== ${arr2}`);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false

assertArraysEqual(["1", "2", "3"], ["1", 2, "3"]); // => false

assertArraysEqual([1, 2, 3], [3, 2]); // => false
assertArraysEqual([1, 2, 3], [1, 1, 3]); // => false