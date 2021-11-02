const assert = require('chai').assert;
const without = require('../without');


describe('#without', () => {

  it('returns ["hello", "world"] with out ["lighthouse"] from ["hello", "world", "lighthouse"]', () => {

    const words = ["hello", "world", "lighthouse"];

    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"]);
  });
  
  it('returns ["hello", "world", "lighthouse"]' +
     'with out ["labs", "bootcamp"]' +
     'from ["hello", "world", "lighthouse", "labs", "bootcamp"]', () => {

    const words1 = ["hello", "world", "lighthouse", "labs", "bootcamp"];

    assert.deepEqual(without(words1, ["labs", "bootcamp"]), ["hello", "world", "lighthouse"]);
  });
});