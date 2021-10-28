const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = string => {
  const results = {};

  for (const count of string) {

    if (count !== ' ')

      results[count] ? results[count] += 1 : results[count] = 1;
  }
  return results;
};

assertEqual(countLetters('LHL')['L'], 2);
assertEqual(countLetters("lighthouse in the house")['h'], 4);
assertEqual(countLetters("lighthouse in the house")[' '], 3);
assertEqual(countLetters("lighthouse in the house 1 2 3")['3'], 1);
assertEqual(countLetters("lighthouse in the house 1 2 3")['5'], 1);