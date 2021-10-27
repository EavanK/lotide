const assertArraysEqual = (arr1, arr2) => {

  if (eqArrays(arr1, arr2)) {
    
    console.log(`👍👍👍 Assertion Passed: ${arr1} === ${arr2}`);
  
  } else {

    console.log(`😡😡😡 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = (arr1, arr2) => {

  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {

    return true;

  } else return false;
};

const middle = (arr) => {

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

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5]);
