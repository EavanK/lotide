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
assertArraysEqual(letterPositions("lighthouse").l, [0]);
assertArraysEqual(letterPositions("lighthouse labs").l, [0, 11]);