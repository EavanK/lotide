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

const takeUntil = (array, callback) => {

  const result = [];

  for (const data of array) {

    if (callback(data)) {
      break;
    }
    result.push(data);
  }
  return result;
};


// as long as false, push. on first TRUE, return
const data1 = [1, 2, 5, 7, 2, 2, 4, -1, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2, 2, 4]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);