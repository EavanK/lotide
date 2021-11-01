const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true

assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
assertArraysEqual(["1", "2", "3"], ["1", 2, "3"]); // => false
assertArraysEqual([1, 2, 3], [3, 2]); // => false

assertArraysEqual([1, 2, 3], [1, 1, 3]); // => false

assertArraysEqual([4, 5, 6], [4, 5, 6]); // true

assertArraysEqual([11, 21, 31], [11, 21, 31]); // true

assertArraysEqual(['Ko', 'Re', 'An'], ['Ko', 'Re', 'An']); // true