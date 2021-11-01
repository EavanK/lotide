const assertEqual = function(actual, expected) {

  console.log((actual === expected) ?
    `👍👍👍 Assertion Passed: ${actual} === ${expected}` :
 
    `😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  
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


const eqObjects = (object1, object2) => {

  let result = true;
  const obj1 = Object.keys(object1);
  const obj2 = Object.keys(object2);


  if (obj1.length !== obj2.length) {

    result = false;

  } else {

    for (const key in object1) {

      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        
        result = eqArrays(object1[key], object2[key]);

      } else if (object1[key] === object2[key]) result = true;

      else  result = false;
        
    }
  }
  return result;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

const aa = { a: [1, 2, 3], b: [1, 3, 5] };
const bb = { b: [1, 3, 5], a: [1, 2, 3] };
assertEqual(eqObjects(aa, bb), true); // => true