const assertEqual = function(actual, expected) {

  console.log(

    (actual === expected) ?
      `👍👍👍 Assertion Passed: ${actual} === ${expected}` :
 
      `😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  
};

const findKey = (obj, callback) => {
  
  for (const name in obj) {
    
    if (callback(obj[name])) return name;
  }
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma');

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3), 'Akaleri');