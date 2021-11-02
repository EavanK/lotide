const assert = require('chai').assert;
const letterPositions = require('../letterPositions');


describe('#letter positions', () => {

  it('returns [2, 3] for letter "l" of "hello"', () => {

    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });


  it('returns [0] for letter "l" of "lighthouse"', () => {

    assert.deepEqual(letterPositions("lighthouse").l, [0]);
  });


  it('returns [0, 11] for letter "l" of "lighthouse labs"', () => {

    assert.deepEqual(letterPositions("lighthouse labs").l, [0, 11]);
  });
});