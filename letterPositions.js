const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`👍👍👍 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2) ? true : false;

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    
    if (sentence[i] !== ' ') {

      results[sentence[i]] ? results[sentence[i]].push(i) : results[sentence[i]] = [i];
      
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").l, [2, 3]);