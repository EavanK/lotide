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


const middle = arr => {

  const result = [];

  let i = arr.length - 1;

  if (i !== 0 && i !== 1) {

    if (i % 2 === 0) {

      i /= 2;
      result.push(arr[i]);

    } else {
      
      i = Math.floor(i / 2);
      result.push(arr[i], arr[i + 1]);
    }
  }
  return result;
};

assertArraysEqual(middle([1]), []); // false
assertArraysEqual(middle([1, 2]), []); // false
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5]); // false
