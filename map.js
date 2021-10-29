const eqArrays = (arr1, arr2) => {
  let result = false;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        result = false;
        break;
      } else {
        result = true;
      }
    }
  }
  return result;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`👍👍👍 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

// callback function-> accepts functions as parameter arguments / returns functions (calls other functions)

const map = function(arr, callback) { // function returns an array
  
  const results = [];
  
  for (let word of arr) {

    results.push(callback(word)); // patameter changes a to word
    
  }
  return results;
};

const results1 = map(words, a => a.toUpperCase() + '!!!');
// ["GROUND!!!", "CONTROL!!!", "TO!!!", "MAJOR!!!", "TOM!!!"]
const results2 = map(words, a => a[0]);
// ["g", "c", "t", "m", "t"]
const results3 = map(words, a => a[1].toUpperCase());
// ["R", "O", "O", "A", "O"]


assertArraysEqual(results1,["GROUND!!!", "CONTROL!!!", "TO!!!", "MAJOR!!!", "TOM!!!"]);
assertArraysEqual(results2,["g", "c", "t", "m", "t"]);
assertArraysEqual(results3,["R", "O", "O", "A", "O"]);