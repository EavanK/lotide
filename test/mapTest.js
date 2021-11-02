const assert = require('chai').assert;
const map = require('../map');


describe('#map', () => {

  const words = ["ground", "control", "to", "major", "tom"];

  it('returns ["GROUND!!!", "CONTROL!!!", "TO!!!", "MAJOR!!!", "TOM!!!"]', () => {

    assert.deepEqual(map(words, a => a.toUpperCase() + '!!!'),

                          ["GROUND!!!", "CONTROL!!!", "TO!!!", "MAJOR!!!", "TOM!!!"]);
  });


  it('returns ["g", "c", "t", "m", "t"]', () => {

    assert.deepEqual(map(words, a => a[0]), ["g", "c", "t", "m", "t"]);
  });

  
  it('returns ["R", "O", "O", "A", "O"]', () => {

    assert.deepEqual(map(words, a => a[1].toUpperCase()), ["R", "O", "O", "A", "O"]);
  });
});