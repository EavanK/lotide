const assert = require('chai').assert;
const middle = require('../middle');



describe('#middel', () => {

  it('returns [] for [1]', () => {

    assert.deepEqual(middle([1]), []);

  });

  it('returns [] for [1]', () => {

    assert.deepEqual(middle([1]), []);

  });

  it('returns [] for [1, 2]', () => {

    assert.deepEqual(middle([1, 2]), []);

  });

  it('returns [2] for [1, 2, 3]', () => {

    assert.deepEqual(middle([1, 2, 3]), [2]);

  });

  it('returns [2, 3] for [1, 2, 3, 4]', () => {

    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);

  });

  it('returns [3] for [1, 2, 3, 4, 5]', () => {

    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);

  });

  it('returns [3, 4] for [1, 2, 3, 4, 5, 6]', () => {

    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

  });

  it('returns [5, 6] for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {

    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);

  });
});

// assertArraysEqual(middle([1]), '[]'); // false
// assertArraysEqual(middle([1, 2]), '[]'); // false
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5]); // false