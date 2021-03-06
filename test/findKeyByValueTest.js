const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');


describe('#find key by value', () => {

  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };


  it('returns "drama" for "The Wire"', () => {
    
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns 'That '70s Show' for 'undefined", () => {
    
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it('returns "Brooklyn Nine-Nine" for "comedy"', () => {
    
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });

  it('returns "sci_fi" for "The Expanse"', () => {
    
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
  });
});
