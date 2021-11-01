const assertEqual = function(actual, expected) {

  console.log((actual === expected) ?
    `👍👍👍 Assertion Passed: ${actual} === ${expected}` :
 
    `😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  
};


const findKeyByValue = (obj, value) => {

  for (const keys in obj) {

    if (obj[keys] === value) return keys;
  }
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "drama"); // false
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
