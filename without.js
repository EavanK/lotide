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


const without = (source, remove) => {

  let result = [];

  for (const element of source) {

    if (!remove.includes(element)) result.push(element);

  }
  return result;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
// without(words, ["lighthouse"]);  //no need to capture return value for this test case
// // Make sure the original array was not altered by the without function

assertArraysEqual(words, ["hello", "world", "lighthouse"]); // true