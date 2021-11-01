const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = (array) => {

  return (array.length === 0 && array.length === 1) ? [] : array.slice(1);
  
};

const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result, ['Lighthouse', 'Labs']); // will always fail!


const words = ["Yo Yo", "Lighthouse", "Labs"];


assertEqual(words.length, 3);

//[1, 2, 3] === [1, 2, 3] // => false
//[1, 2, 3] == [1, 2, 3] // => false
assertEqual(tail(words), ['Lighthouse', 'Labs']);// will be failed.


//An array with only one element should yield an empty array for its tail
const myName = ['Hyunsu'];
assertEqual(tail(myName), ['Hyunsu']);

// An empty array should yield an empty array for its tail
const empty = [];
assertEqual(tail(empty), []);