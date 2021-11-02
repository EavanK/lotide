const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('#take until', () => {

  it('returns [1, 2, 5, 7, 2, 2, 4] if an element is less than 0 it will stop taking it', () => {

    const data1 = [1, 2, 5, 7, 2, 2, 4, -1, 5];

    assert.deepEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2, 2, 4]);
  });
  

  it('returns ["I", "have", "been", "to", "Hollywood"] if an element meets comma(",") it will stop taking it', () => {

    const data2 = ["I", "have", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

    assert.deepEqual(takeUntil(data2, x => x === ','), ['I', 'have', 'been', 'to', 'Hollywood']);
  });
});