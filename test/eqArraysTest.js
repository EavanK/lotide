const assert = require('chai').assert;
const eqArrays = require('../eqArrays');


describe('#equal arrays', () => {

  it('return true if given arrays are equal', () => {

    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });


  it('return false if given arrays are not equal', () => {

    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });


  it('return true if given arrays are equal', () => {

    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });


  it('return false if given arrays are not equal', () => {

    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });


  it('return false if given arrays are not equal', () => {

    assert.isFalse(eqArrays([1, '2', 3], [1, 2, 3]));
  });


  it('return false if given arrays are not equal', () => {

    assert.isFalse(eqArrays([1, 2, 3], ['1', 2, 3]));
  });
});